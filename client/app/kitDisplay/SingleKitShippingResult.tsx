import { KitShippingDataViewModel } from '@/api/KitShippingDataViewModel';
import { KitInfoItem } from '@/app/kitDisplay/KitInfoItem';
import { Button } from '@/app/shared/Button';
import { useMemo } from 'react';

type Props = {
    kit: KitShippingDataViewModel;
};
export const SingleKitShippingResult = ({ kit }: Props) => {
    const fedExTrackingUrl = useMemo(() => 'https://www.fedex.com/fedextrack/?trknbr=', []);

    return (
        <div className={'flex gap-2 items-end justify-between'}>
            <KitInfoItem label={'Label Id'} value={kit.formattedLabelId} />
            <KitInfoItem label={'Tracking Number'} value={kit.shippingTrackingCode} />
            <a href={`${fedExTrackingUrl}${kit.shippingTrackingCode}`} target={'_blank'} rel={'noreferrer noopener'}>
                <Button label={'Track It'} />
            </a>
        </div>
    );
};
