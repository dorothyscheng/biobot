import { KitShippingDataViewModel } from '@/api/KitShippingDataViewModel';
import { KitInfoItem } from '@/app/kitDisplay/KitInfoItem';

type Props = {
    kit: KitShippingDataViewModel;
};
export const KitShippingResultDisplay = ({ kit }: Props) => {
    return (
        <div className={'flex'}>
            <KitInfoItem label={'Label Id'} value={kit.labelId} />
            <KitInfoItem label={'Tracking Number'} value={kit.shippingTrackingCode} />
            <button>Track It</button>
        </div>
    );
};
