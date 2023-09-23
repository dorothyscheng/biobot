import { Document } from 'flexsearch';
import { KitShippingDataViewModel } from './models/KitShippingDataViewModel';

type RawKitShippingData = {
    id: string;
    label_id: string;
    shipping_tracking_code: string;
};
const kitDataJson: RawKitShippingData[] = require('./KITS_SHIPPING_DATA.json');

class KitShippingData {
    private document: Document<KitShippingDataViewModel, true> | undefined;

    public initialize(): void {
        const document = new Document<KitShippingDataViewModel, true>({
            document: {
                id: 'id',
                index: [
                    {
                        field: 'labelId',
                        tokenize: 'full',
                    },
                ],
                store: true,
            },
        });
        kitDataJson.forEach((d) => {
            document.add(d.id, {
                id: d.id,
                labelId: d.label_id.replace(/-/g, ''),
                formattedLabelId: d.label_id,
                shippingTrackingCode: d.shipping_tracking_code,
            });
        });
        this.document = document;
    }

    public async search(searchTerm: string): Promise<KitShippingDataViewModel[]> {
        if (!this.document) {
            console.error('NO DOCUMENT EXISTS');
            return [];
        }
        const searchResults = await this.document.searchAsync<true>({
            query: searchTerm,
            enrich: true,
        });
        return searchResults.flatMap((s) => s.result.flatMap((r) => r.doc));
    }
}

const data = new KitShippingData();
export default data;
