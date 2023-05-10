import { lazy } from 'react';

export const MainPageAsync = lazy(
    //@ts-ignore
    () => new Promise(resolve => setTimeout(() => resolve(import('./MainPage')),1500)));