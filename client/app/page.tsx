import { SearchByLabelId } from '@/app/searchForm/SearchByLabelId';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col p-24">
            <h1 className={'font-bold text-xl mb-3'}>Biobot Kit Tracking</h1>
            <SearchByLabelId />
        </main>
    );
}
