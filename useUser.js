import useSWR from 'swr';

export function fetcher(url) {
    return fetch(url).then(r => r.json());
}

export function useUser() {
    const { data, error } = useSWR('/api/me', fetcher);
    return {
        user: data,
        isLoading: !error && !data,
        isError: error
    };
}
