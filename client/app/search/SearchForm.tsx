type Props = {
    labelId: string;
    onChangeInput: (input: string) => void;
};
export const SearchForm = ({ labelId, onChangeInput }: Props) => {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                console.log('submit');
            }}
            className={'flex align-bottom'}
        >
            <div className={'flex flex-col px-3'}>
                <label htmlFor={'kit-id'}>Enter your kit label id</label>
                <input
                    id={'kit-id'}
                    type={'text'}
                    name={'kit-id'}
                    value={labelId}
                    placeholder={'XX-XXX-XXXX'}
                    required
                    className={'text-black'}
                    onChange={(e) => onChangeInput(e.target.value)}
                    maxLength={11}
                />
            </div>
            <button type={'submit'}>Search</button>
        </form>
    );
};
