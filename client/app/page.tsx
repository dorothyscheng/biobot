import { SearchByLabelId } from '@/app/search/SearchByLabelId';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <SearchByLabelId />
        </main>
    );
}
