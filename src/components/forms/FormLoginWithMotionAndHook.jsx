/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useForm from '../hooks/useForm.js';
import ModalInfo from '../../components/modals/ModalInfo.jsx';
import { setFormData, clearFormData } from '../../store/features/form/formSlice.js';

const FormWithMotionAndHook = ({ titleForm }) => {
  const dispatch = useDispatch();
  const module = useSelector((state) => state.form.module);
  const username = useSelector((state) => state.form.username);
  const email = useSelector((state) => state.form.email);
  const password = useSelector((state) => state.form.password);
  const { formData, handleChange, resetForm } = useForm({ username, email, password });
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === 'mod7USIP-Grover') {
      dispatch(setFormData(formData));
      setModalMessage(`¡Bienvenido, ${formData.username}!`); 
      setShowModal(true);
    } else {
      setModalMessage('Username/Password incorrectos!!!');
      setShowModal(true);
      dispatch(clearFormData());
    }
  };

  const onCloseModalInfo = () => {
    setShowModal(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <ModalInfo visible={showModal} message={modalMessage} onClose={onCloseModalInfo} />
      <form onSubmit={handleSubmit}>
        <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
          <h3>{titleForm}</h3>
        </motion.div>
        <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
          <div>
            <label>Module:<input type="text" name="module" value={module} onChange={handleChange} disabled /></label>
          </div>
        </motion.div>
        <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
          <div>
            <label>Username: <input type="text" name="username" value={formData.username} onChange={handleChange} required /></label>
          </div>
        </motion.div>
        <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
          <div>
            <label>Email:<input type="email" name="email" value={formData.email} onChange={handleChange} required /></label>
          </div>
        </motion.div>
        <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
          <div>
            <label>Password:
              <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} required />
              <button type="button" onClick={togglePasswordVisibility}>
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </label>
          </div>
        </motion.div>
        <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}><button type="submit">Login</button></motion.div>
      </form>
    </motion.div>
  );
};

export default FormWithMotionAndHook;