'use client';
import { useState } from 'react';
import { getKits } from '@/api/apiClient';
import { KitShippingDataViewModel } from '@/api/KitShippingDataViewModel';
import { AutocompleteResults } from '@/app/search/AutocompleteResults';
import labelIdService from '@/app/search/LabelIdService';
import { SearchForm } from '@/app/search/SearchForm';

export const SearchByLabelId = () => {
    const [labelId, setLabelId] = useState('');
    const [autocompleteResults, setAutocompleteResults] = useState<KitShippingDataViewModel[]>([]);
    const [selected, setSelected] = useState<KitShippingDataViewModel | undefined>(undefined);

    const onChangeInput = (input: string) => {
        const cleaned = labelIdService.cleanInput(input);
        const formatted = labelIdService.formatLabelId(cleaned);
        setLabelId(formatted);

        // TODO: throttle search
        handleSearch(cleaned);
    };

    const onSelectResult = (selected: KitShippingDataViewModel) => {
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
        <div>
            <SearchForm labelId={labelId} onChangeInput={onChangeInput} />
            <AutocompleteResults results={autocompleteResults} onSelectResult={onSelectResult} />
        </div>
    );
};
