'use client';
import { FormEvent, useEffect, useMemo, useState } from 'react';
import { getKits } from '@/api/apiClient';
import { KitShippingDataViewModel } from '@/api/KitShippingDataViewModel';

export const SearchForm = () => {
    const [value, setValue] = useState('');
    const [results, setResults] = useState<KitShippingDataViewModel[]>([]);

    const cleanInput = (input: string) => input.replace(/\D/g, '');

    const formatLabelId = (input: string) => {
        let formatted = '';
        const cleaned = cleanInput(input);
        Array.from(cleaned).forEach((c, index) => {
            if (index === 2 || index === 5) {
                formatted += `-${c}`;
            } else {
                formatted += c;
            }
        });
        setValue(formatted);
    };

    const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const cleaned = cleanInput(value);
            const response = await getKits(cleaned);
            setResults(response);
        } catch (e) {
            console.error(e);
            setResults([]);
        }
    };

    return (
        <form onSubmit={(e) => handleSearch(e)} className={'flex flex-col'}>
            <div className={'flex flex-col p-10'}>
                <label htmlFor={'kit-id'}>Enter your kit label id</label>
                <input
                    id={'kit-id'}
                    type={'text'}
                    name={'kit-id'}
                    value={value}
                    placeholder={'XX-XXX-XXXX'}
                    required
                    className={'text-black'}
                    onChange={(e) => formatLabelId(e.target.value)}
                    maxLength={11}
                />
            </div>
            <button type={'submit'}>Search</button>
        </form>
    );
};
