import { ButtonHTMLAttributes } from 'react';

type Props = {
    label: string;
};

export const Button = ({ label, ...props }: Props & ButtonHTMLAttributes<any>) => {
    return (
        <button className={'rounded bg-yellow p-2 h-fit ml-3 text-navy'} {...props}>
            {label}
        </button>
    );
};
