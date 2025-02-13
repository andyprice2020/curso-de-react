import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  words: [],
};

const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {
    addWord: (state, action) => {
      state.words.push(action.payload);
    },
    
    removeWord: (state, action) => {
      state.words = state.words.filter( (word) => 
        word.english.trim().toLowerCase() !== action.payload.english.trim().toLowerCase() &&
        word.spanish.trim().toLowerCase() !== action.payload.spanish.trim().toLowerCase() &&
        word.portuguese.trim().toLowerCase() !== action.payload.portuguese.trim().toLowerCase()
      );
    },

    translateWord: (state, action) => {
      const foundWord = state.words.find(word => Object.values(word).includes(action.payload));
      return foundWord || { message: "Palabra inexistente" };
    }
  },
});

export const { addWord, removeWord, translateWord } = dictionarySlice.actions;
export default dictionarySlice.reducer;