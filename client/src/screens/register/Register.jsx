import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Register.css'

export default function Register({ handleRegister }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    DOB: '',

  })
  const { username, email, password, DOB } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div>
      <form className='register-form'
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister(formData);
        }}>
        <h3 className='register'>Create a New Account</h3>
        <label>
          Username:
        <input
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
        <input
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
        <input
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />
        <div className='birthday'>
          <p>Birthday</p>

          <label>
            <input type='date' name='DOB' value={DOB} onChange={handleChange} />
          </label>
        </div>
        <button>Submit</button>
      </form>
      <Link to='/login' className="login-link">I have an Account</Link>
    </div>
  )
}

