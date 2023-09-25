import { create } from 'apisauce';
import { KitShippingDataViewModel } from '@/api/KitShippingDataViewModel';

const apiClient = create({
    baseURL: process.env.API_URL,
});

export const getKits = async (kitId: string): Promise<KitShippingDataViewModel[]> => {
    const response = await apiClient.post<KitShippingDataViewModel[]>(
        '/',
        { kitNumber: kitId },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        },
    );
    if (response.ok) return response.data ?? [];

    console.error(
        `Get kits failed with status ${response.status} and message ${response.problem}: ${response.originalError}`,
    );

    return [];
};
