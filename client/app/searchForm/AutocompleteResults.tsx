import { KitShippingDataViewModel } from '@/api/KitShippingDataViewModel';

type Props = {
    results: KitShippingDataViewModel[];
    onSelectResult: (selected: KitShippingDataViewModel) => void;
};
export const AutocompleteResults = ({ results, onSelectResult }: Props) => {
    if (results.length === 0) return <></>;

    return (
        <div className={'flex flex-col mt-1 w-3/4 bg-white text-black p-1'}>
            {results.map((r, index) => (
                <div key={`autocomplete-${r.id}`}>
                    <p onClick={() => onSelectResult(r)} className={'cursor-pointer hover:bg-gray-200'}>
                        {r.formattedLabelId}
                    </p>
                    {index !== results.length - 1 && <div className={'w-.75 h-0.5 bg-gray-400 m-1'} />}
                </div>
            ))}
        </div>
    );
};
