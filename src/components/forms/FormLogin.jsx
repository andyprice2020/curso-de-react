/* eslint-disable react/prop-types */
import { useState } from "react";
const FormLogin = ({titleForm}) => {
    const [formData, setFormData] = useState({
        username: '',
        email: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }
    return (
      <>
        <form onSubmit={handleSubmit}>
          <h3>{titleForm}</h3>
          <div>
            <label>
              Username:{" "}
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Email:{" "}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <button type="submit">Send</button>
        </form>
      </>
    );        
};

export default FormLogin;