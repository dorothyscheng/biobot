import { SearchByLabelId } from '@/app/searchForm/SearchByLabelId';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col justify-between p-24">
            <SearchByLabelId />
        </main>
    );
}
