import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { logout } from '../auth';

const Navbar = () => {
  const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();           // Clear token from localStorage
//     navigate('/login'); // Redirect to login page
//   };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <Link to="/todo" style={styles.link}>📝 To-Do App</Link>
      </div>
      {/* <div>
        <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
      </div> */}
    </nav>
  );
};

const styles = {
  navbar: {
    background: '#001122',
    color: 'white',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    fontSize: '20px',
    fontWeight: 'bold'
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  },
//   logoutBtn: {
//     padding: '6px 12px',
//     background: '#FF5555',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer'
//   }
};

export default Navbar;
