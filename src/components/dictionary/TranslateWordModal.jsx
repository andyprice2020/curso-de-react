/* eslint-disable react/prop-types */
import { useState } from 'react'

import './css/dictionary.css'
const TranslateWordModal = ({ isOpen, onClose, onTranslateWord  }) => {
    const [word, setWord] = useState('');
    const [translation, setTranslation] = useState('');
  
    const handleSubmit = () => {
      if (word) {
        console.log('Buscando...', word);
        const foundWord = onTranslateWord(word);        
        if (foundWord) {
          console.log('Palabra encontrada', foundWord);          
          setTranslation(
            `Spanish: ${foundWord.spanish}, English: ${foundWord.english}, Portuguese: ${foundWord.portuguese}`
          );
        } else {
          console.log('Palabra inexistente');          
          setTranslation('Palabra inexistente');
        }
      } else {
        alert('Ingrese una palabra');
      }
    };
  
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal">
          <h2>Traducir palabra</h2>
          <input
            type="text"
            placeholder="Ingrese palabra"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <button onClick={handleSubmit}>Traducir</button>
          <button onClick={onClose}>Cancelar</button>
          {translation && <p className="translation-result">{translation}</p>}
        </div>
      </div>
    );
  };

  export default TranslateWordModal;