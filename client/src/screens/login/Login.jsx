import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Login.css'
export default function Login(props) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const { email, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div>
      <form className='login-form'
        onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }}>
        <h3 className='login'>Login</h3>
        <label>
          <input
            type='text'
            name='email'
            placeholder='email'
            value={email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          <input
            placeholder='password'
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
      <Link to='/register' className="register-link">I need an account </Link>

    </div>

  )
}

