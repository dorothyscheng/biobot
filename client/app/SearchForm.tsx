'use client';
import {FormEvent, useState} from 'react';

export const SearchForm = () => {
    const [value, setValue] = useState('');

    const formatLabelId = (input: string) => {
        const cleaned = input.replace(/\D/g, '');

        let formatted = '';
        Array.from(cleaned).forEach((c, index) => {
            if (index === 2 || index === 5) {
                formatted += `-${c}`;
            } else {
                formatted += c;
            }
        });
        setValue(formatted);
    };

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`searching for ${value}`);
    };

    return (
        <form onSubmit={(e) => handleSearch(e)} className={'flex'}>
            <div>
                <label htmlFor={'kit-id'}>Enter your kit label id:</label>
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
