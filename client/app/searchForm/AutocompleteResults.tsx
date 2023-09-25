import { KitShippingDataViewModel } from '@/api/KitShippingDataViewModel';

type Props = {
    results: KitShippingDataViewModel[];
    onSelectResult: (selected: KitShippingDataViewModel) => void;
};
export const AutocompleteResults = ({ results, onSelectResult }: Props) => {
    if (results.length === 0) return <></>;

    return (
        <div>
            {results.map((r) => (
                <p key={r.id} onClick={() => onSelectResult(r)}>
                    {r.formattedLabelId}: tracking number {r.shippingTrackingCode}
                </p>
            ))}
        </div>
    );
};
