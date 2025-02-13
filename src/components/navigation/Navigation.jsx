import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { clearFormData } from '../../store/features/form/formSlice'

const Navigation = () => {
    const dispatch = useDispatch();
    const username = useSelector((state) => state.form.username);
    const email = useSelector((state) => state.form.email);
    const handleLogout = () => {
        // Implement logout logic here
        dispatch(clearFormData());
    }
    return (
        <nav className="navbar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/" className="nav-link">Landing Page</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/counter" className="nav-link">Counter</Link>
            <Link to="/think" className="nav-link">Think</Link>
            <Link to="/products" className="nav-link">Product</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/dictionary" className="nav-link">Dictionary</Link>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {username && email && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'black', fontWeight: 'bold' }}>{username}</span>
                <span style={{ color: 'black', fontWeight: 'bold' }}>{email}</span>
              </div>
            )}
            <button
              onClick={handleLogout}
              style={{
                background: 'none',
                border: 'none',
                color: 'black',
                cursor: 'pointer',
                fontWeight: 'bold',
                padding: '0.5rem',
              }}
              onMouseOver={(e) => (e.target.style.color = '#5378c3')}
              onMouseOut={(e) => (e.target.style.color = 'black')}
            >
              Logout
            </button>
          </div>
        </nav>
      );
    };

export default Navigation;