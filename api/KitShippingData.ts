import { Document } from 'flexsearch';

export type KitShippingDataViewModel = {
    id: string;
    label_id: string;
    shipping_tracking_code: string;
};

const kitDataJson: KitShippingDataViewModel[] = require('./KITS_SHIPPING_DATA.json');

class KitShippingData {
    private document: Document<KitShippingDataViewModel, true> | undefined;

    public loadData(): void {
        const document = new Document<KitShippingDataViewModel, true>({
            document: { id: 'id', index: 'label_id', store: true },
        });
        kitDataJson.forEach((d) => {
            document.add(d.id, d);
        });
        this.document = document;
    }

    public async searchData(searchTerm: string): Promise<KitShippingDataViewModel[]> {
        if (!this.document) {
            console.error('NO DOCUMENT EXISTS');
            return [];
        }
        const searchResults = await this.document.searchAsync<true>({
            query: searchTerm,
            index: 'label_id',
            enrich: true,
        });
        return searchResults.flatMap((s) => s.result.flatMap((r) => r.doc));
    }
}

const data = new KitShippingData();
export default data;
