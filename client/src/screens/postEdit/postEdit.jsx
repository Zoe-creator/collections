import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './PostEdit.css'

export default function PostEdit({ posts, handleUpdate }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    img_url: ''
  })
  const { title, description, img_url } = formData;
  const { id } = useParams();


  useEffect(() => {
    const prefillFormData = () => {
      const postItem = posts.find(post => post.id === +id);
      setFormData({
        title: postItem.title,
        description: postItem.description,
        img_url: postItem.img_url
      })
    }
    if (posts.length) {
      prefillFormData()
    }
  }, [posts, id])


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
      handleUpdate(id, formData);
    }}>
      <h3>Edit My Collection</h3>
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
        />
      </label>
      <button className="submit-button">Submit</button>
    </form>
  )
}
