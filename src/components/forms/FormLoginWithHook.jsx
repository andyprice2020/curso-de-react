/* eslint-disable react/prop-types */
import useForm from '../hooks/useForm.js'
const FormLoginWithHook = ({ titleForm }) => {
    const { formData, handleChange } = useForm({
        username: '',
        email: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

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
          <button type="submit">Submit</button>
        </form>
      </>
    );        
};

export default FormLoginWithHook;