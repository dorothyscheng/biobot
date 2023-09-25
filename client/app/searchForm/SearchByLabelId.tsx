'use client';
import { useState } from 'react';
import { getKits } from '@/api/apiClient';
import { KitShippingDataViewModel } from '@/api/KitShippingDataViewModel';
import { AutocompleteResults } from '@/app/searchForm/AutocompleteResults';
import labelIdService from '@/app/searchForm/LabelIdService';
import { SearchForm } from '@/app/searchForm/SearchForm';
import { KitShippingResultDisplay } from '@/app/kitDisplay/KitShippingResultDisplay';

export const SearchByLabelId = () => {
    const [labelId, setLabelId] = useState('');
    const [autocompleteResults, setAutocompleteResults] = useState<KitShippingDataViewModel[]>([]);
    const [selected, setSelected] = useState<KitShippingDataViewModel | undefined>(undefined);

    const onChangeInput = (input: string) => {
        setSelected(undefined);
        const cleaned = labelIdService.cleanInput(input);
        const formatted = labelIdService.formatLabelId(cleaned);
        setLabelId(formatted);

        // TODO: throttle search
        handleSearch(cleaned);
    };

    const onClickSubmit = () => {
        onChangeInput(labelId);
        // TODO: display nice user message when no results found
    };

    const onSelectResult = (selected: KitShippingDataViewModel) => {
        setLabelId('');
        setAutocompleteResults([]);
        setSelected(selected);
    };

    const handleSearch = async (searchTerm: string) => {
        try {
            const response = await getKits(searchTerm);
            setAutocompleteResults(response);
        } catch (e) {
            console.error(e);
            setAutocompleteResults([]);
        }
    };

    return (
        <div className={'flex flex-row min-h-screen'}>
            <div>
                <SearchForm labelId={labelId} onChangeInput={onChangeInput} onSubmit={onClickSubmit} />
                <AutocompleteResults results={autocompleteResults} onSelectResult={onSelectResult} />
            </div>
            {selected && <KitShippingResultDisplay kit={selected} />}
        </div>
    );
};
