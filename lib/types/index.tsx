export type Params = {
    q: string;
    currentPage?: number;
}

export type loadingState = 'idle' | 'pending' | 'succeeded' | 'failed';