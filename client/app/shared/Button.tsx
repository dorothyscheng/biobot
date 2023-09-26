import { ButtonHTMLAttributes } from 'react';

type Props = {
    label: string;
};

export const Button = ({ label, ...props }: Props & ButtonHTMLAttributes<any>) => {
    return (
        <button className={'border-2 rounded border-amber-500 p-2 h-fit ml-3'} {...props}>
            {label}
        </button>
    );
};
