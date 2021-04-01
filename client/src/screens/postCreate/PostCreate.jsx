import { useState,useContext } from 'react'
import {useParams} from "react-router-dom"
import { AdminContext } from '../../context/adminContext';

export default function PostCreate(props) {
  const { admin } = useContext(AdminContext);
console.log(admin)
  const { handleCreate, currentUser } = props;
  console.log(currentUser)
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

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleCreate(formData);
    }}>
      <h3>Create Food</h3>
      <label>
        Name:
        <input
          type='text'
          name='title'
          value={title}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <input
          type='text'
          name='description'
          value={description}
          onChange={handleChange}
        />
      </label>
      <label>
        img_url:
        <input
          type='text'
          name='img_url'
          value={img_url}
          onChange={handleChange}
        />
        {/* {checkImage()} */}
      </label>
      <button>Submit</button>
    </form>
  )
}
