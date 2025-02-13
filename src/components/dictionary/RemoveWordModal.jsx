/* eslint-disable react/prop-types */
import {useState } from 'react'
import './css/dictionary.css'
const RemoveWordModal = ({ isOpen, onClose, onRemoveWord }) => {
    const [word, setWord] = useState('');
  
    const handleSubmit = () => {
      if (word) {
        onRemoveWord(word);
        setWord(''); // Limpiar campo
        onClose();
      } else {
        alert('Ingrese una palabra');
      }
    };
  
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal">
          <h2>Quitar palabra</h2>
          <input
            type="text"
            placeholder="Ingrese la palabra"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <button onClick={handleSubmit}>Quitar</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    );
  };

  export default RemoveWordModal;