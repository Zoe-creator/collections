import { useState } from 'react';
import { Link } from 'react-router-dom';

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
        <form onSubmit={(e)=>{
      e.preventDefault();
      handleLogin(formData);
    }}>
      <h3>Login</h3>
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
      <Link to='/register'>I need an account </Link>
  
    </div>

  )
}

