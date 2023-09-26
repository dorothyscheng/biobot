import { KitShippingDataViewModel } from '@/api/KitShippingDataViewModel';
import { SingleKitShippingResult } from '@/app/kitDisplay/SingleKitShippingResult';

type Props = {
    results: KitShippingDataViewModel[];
};
export const KitShippingResults = ({ results }: Props) => {
    return (
        <div>
            <h2 className={'font-bold text-lg my-5'}>Results ({results.length})</h2>
            <div className={'flex flex-col gap-6'}>
                {results.map((r) => (
                    <SingleKitShippingResult key={`result-${r.id}`} kit={r} />
                ))}
            </div>
        </div>
    );
};
