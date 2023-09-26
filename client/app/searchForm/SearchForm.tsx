type Props = {
    labelId: string;
    onChangeInput: (input: string) => void;
    onSubmit: () => void;
};
export const SearchForm = ({ labelId, onChangeInput, onSubmit }: Props) => {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
            }}
            className={'flex items-end'}
        >
            <div className={'flex flex-col'}>
                <label htmlFor={'kit-id'}>Enter your kit label id</label>
                <input
                    id={'kit-id'}
                    type={'text'}
                    name={'kit-id'}
                    value={labelId}
                    placeholder={'XX-XXX-XXXX'}
                    required
                    className={'text-black p-1 mt-1'}
                    onChange={(e) => onChangeInput(e.target.value)}
                    maxLength={11}
                />
            </div>
            <button type={'submit'} className={'border-2 rounded border-amber-500 p-2 h-fit ml-3'}>
                Search
            </button>
        </form>
    );
};
