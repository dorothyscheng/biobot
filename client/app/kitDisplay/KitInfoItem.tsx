type Props = {
    label: string;
    value: string;
};
export const KitInfoItem = ({ label, value }: Props) => {
    return (
        <div className={'flex flex-col items-center'}>
            <h6>{label}</h6>
            <h4>{value}</h4>
        </div>
    );
};
