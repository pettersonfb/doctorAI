import { instance } from './axiosInstance';

export const axiosBaseQuery =
    ({ baseUrl } = { baseUrl: '' }) =>
        async ({ url, method, data, params, headers }) => {
            try {
                console.log(baseUrl);
                console.log(url);
                const result = await instance({
                    url: baseUrl + url,
                    method,
                    data,
                    params,
                    headers: headers
                })
                return result
            } catch (axiosError) {
                const err = axiosError
                return {
                    error: {
                        status: err.response?.status,
                        data: err.response?.data || err.message,
                    },
                }
            }
        }