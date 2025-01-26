import { motion } from 'motion/react';
import { useState } from 'react'
import { useSelector } from 'react-redux'
import useForm from '../hooks/useForm.js';
import ModalInfo from '../../components/modals/ModalInfo.jsx'
// eslint-disable-next-line react/prop-types
const FormWithMotionAndHook = ({titleForm}) => {
  const module = useSelector((state) => state.form.module)
  const username = useSelector((state) => state.form.username)
  const email = useSelector((state) => state.form.email)
  const password = useSelector((state) => state.form.password)
  const {handleChange} = useForm({ });
  const [showModal, setShowModal] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  
  const onCloseModalInfo = () => {
    setShowModal(false);
  };
  
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <ModalInfo visible={showModal} message="Form Submitted successfully!" onClose={onCloseModalInfo} />
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
            <label>Username: <input type="text" name="username" value={username} onChange={handleChange} required /></label>
          </div>
        </motion.div>
        <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
          <div>
            <label>Email:<input type="email" name="email" value={email} onChange={handleChange} required /></label>
          </div>
        </motion.div>
        <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
          <div>
            <label>Password:<input type="password" name="password" value={password} onChange={handleChange} required /></label>
          </div>
        </motion.div>
        <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}><button type="submit">Login</button></motion.div>
      </form>
    </motion.div>
  );
};
export default FormWithMotionAndHook;