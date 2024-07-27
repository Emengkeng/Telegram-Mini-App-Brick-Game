// src/types/store.d.ts (you might need to create this file)
import { Store } from '@reduxjs/toolkit';

declare module '@/store' {
    const store: Store;
    export default store;
}