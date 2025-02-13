/* eslint-disable react/prop-types */
import { useState } from 'react'
import './css/dictionary.css'
const AddWordModal = ({ isOpen, onClose, onAddWord }) => {
    const [spanish, setSpanish] = useState('');
    const [english, setEnglish] = useState('');
    const [portuguese, setPortuguese] = useState('');
  
    const handleSubmit = () => {
      if (spanish && english && portuguese) {
        onAddWord({ spanish, english, portuguese });
        setSpanish('');
        setEnglish('');
        setPortuguese('');
        onClose();
      } else {
        alert('Llene todos los campos');
      }
    };
  
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal">
          <h2>Agregar palabra</h2>
          <input
            type="text"
            placeholder="Español"
            value={spanish}
            onChange={(e) => setSpanish(e.target.value)}
          />
          <input
            type="text"
            placeholder="English"
            value={english}
            onChange={(e) => setEnglish(e.target.value)}
          />
          <input
            type="text"
            placeholder="Portuguese"
            value={portuguese}
            onChange={(e) => setPortuguese(e.target.value)}
          />
          <button onClick={handleSubmit}>Agregar</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    );
  };

  export default AddWordModal;