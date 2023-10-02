import { configureStore } from '@reduxjs/toolkit';
import { menuSlice } from './menuSlice';

const store = configureStore({
    reducer: {
        menu: menuSlice.reducer,

    }
})

export default store;