// GamePage.d.ts
import { Store } from '@reduxjs/toolkit';

declare module '@/store/index.jsx' {
    const store: Store;
    export default store;
}