import { GetPetsRequest, GetPetsResponse } from '../../interfaces/pet';
import httpClient from '../api/httpClient';

export async function getPets(params?: GetPetsRequest): Promise<GetPetsResponse> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await httpClient.get('/pet', { params });

    return response.data;
  } catch (error) {
    console.log('Error while looking for pets', error);
    throw error;
  }
}
