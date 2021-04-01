import { useState,useContext } from 'react'
import {useParams} from "react-router-dom"
import { AdminContext } from '../../context/adminContext';

import "./PostCreate.css"

export default function PostCreate(props) {
  const { admin } = useContext(AdminContext);
  const { handleCreate, currentUser } = props;

  const [formData, setFormData] = useState({
   user_id:currentUser.id,
    title: '',
    description: '',
    img_url: ''
  })
  const { user_id, title, description, img_url } = formData;
  


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
 
      [name]: value
    }))
  }
//   const handleError = (e) => {
//   e.target.src='https://www.elegantthemes.com/blog/wp-content/uploads/2020/08/000-http-error-codes.png'
// }
  return (
    <form className="create-form" onSubmit={(e) => {
      e.preventDefault();
      handleCreate(formData);
    }}>
      <h3>Create A Collection</h3>
      <label>
        Name of Your Collection:
        <input
          type='text'
          name='title'
          value={title}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <textarea
          type='text'
          name='description'
          value={description}
          onChange={handleChange}
        />
      </label>
      <label>
        Image-Link:
        <input
          type='text'
          name='img_url'
          value={img_url}
          onChange={handleChange}
          // onError={handleError}
        />
        {/* {checkImage()} */}
      </label>
      <button>Submit</button>
    </form>
  )
}
