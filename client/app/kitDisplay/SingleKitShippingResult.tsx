import { KitShippingDataViewModel } from '@/api/KitShippingDataViewModel';
import { KitInfoItem } from '@/app/kitDisplay/KitInfoItem';
import { Button } from '@/app/shared/Button';

type Props = {
    kit: KitShippingDataViewModel;
};
export const SingleKitShippingResult = ({ kit }: Props) => {
    return (
        <div className={'flex gap-2 items-end justify-between'}>
            <KitInfoItem label={'Label Id'} value={kit.formattedLabelId} />
            <KitInfoItem label={'Tracking Number'} value={kit.shippingTrackingCode} />
            <Button label={'Track It'} />
        </div>
    );
};
