import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice.js'
import productReducer from './features/product/productSlice.js'
import formReducer from './features/form/formSlice.js'
import dictionaryReducer from './features/dictionary/dictionarySlice.js'
// Create a Redux store instance
const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
    form: formReducer,
    dictionary: dictionaryReducer,
  },
});

export default store;