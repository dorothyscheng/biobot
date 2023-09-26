type Props = {
    label: string;
    value: string;
};
export const KitInfoItem = ({ label, value }: Props) => {
    return (
        <div className={'flex flex-col items-center'}>
            <h2 className={'font-bold text-sm'}>{label}</h2>
            <p>{value}</p>
        </div>
    );
};
