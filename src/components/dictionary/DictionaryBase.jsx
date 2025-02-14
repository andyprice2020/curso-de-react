/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWord, removeWord } from '../../store/features/dictionary/dictionarySlice.js';
import AddWordModal from '../../components/dictionary/AddWordModal';
import RemoveWordModal from '../../components/dictionary/RemoveWordModal';
import TranslateWordModal from '../../components/dictionary/TranslateWordModal';
import './css/dictionary.css'

const DictionaryBase = () => {
  const dispatch = useDispatch();
  const words = useSelector((state) => state.dictionary.words);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [showTranslateModal, setShowTranslateModal] = useState(false);
  const [wordToRemove] = useState('');

  const handleAddWord = (newWord) => {
    dispatch(addWord(newWord));
    setShowAddModal(false);
  }

  const handleRemoveWord = (word) => {
    
    const normalizeWord = word.trim().toLowerCase();

    const foundWord = words.find(
      (w) => 
        w.spanish.trim().toLowerCase() === normalizeWord || 
        w.english.trim().toLowerCase() === normalizeWord || 
        w.portuguese.trim().toLowerCase() === normalizeWord
    );

    if (foundWord) { 
      dispatch(removeWord(foundWord)); 
    } else { 
      alert('No se encontró la palabra en el diccionario.'); 
    }
    setShowRemoveModal(false);
  }

  const handleTranslateWord = (word) => {
    const foundWord = words.find(
      (w) =>
        w.spanish.toLowerCase() === word.toLowerCase() ||
        w.english.toLowerCase() === word.toLowerCase() ||
        w.portuguese.toLowerCase() === word.toLowerCase()
    );
    if (foundWord) {
      return foundWord;
    } else {
      return null;
    }
  };
  
  return (
    <div>      
      <button onClick={() => setShowAddModal(true)}>Agregar palabra</button>
      <button onClick={() => setShowRemoveModal(true)}>Quitar palabra</button>
      <button onClick={() => setShowTranslateModal(true)}>Traducir palabra</button>
      <AddWordModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAddWord={handleAddWord}
      />
      <RemoveWordModal
        isOpen={showRemoveModal}
        onClose={() => setShowRemoveModal(false)}
        onRemoveWord={handleRemoveWord}
      />
      <TranslateWordModal
        isOpen={showTranslateModal}
        onClose={() => setShowTranslateModal(false)}
        onTranslateWord={handleTranslateWord}
      />
    </div>
  );
}

export default DictionaryBase;