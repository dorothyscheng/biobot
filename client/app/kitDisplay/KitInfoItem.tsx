type Props = {
    label: string;
    value: string;
};
export const KitInfoItem = ({ label, value }: Props) => {
    return (
        <div className={'flex flex-col items-center'}>
            <h3 className={'font-bold text-sm'}>{label}</h3>
            <p>{value}</p>
        </div>
    );
};
