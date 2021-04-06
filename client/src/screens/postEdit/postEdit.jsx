import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './PostEdit.css'

export default function PostEdit({ posts, handleUpdate }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    img_url: '',
    categories: '',
  })
  const { title, description, img_url, categories } = formData;
  const { id } = useParams();

  const categoriesOptions = ["Unknown", "Book", "Fossile", "Jewelry", "Game", "Toy", "Doll", "Tech", "Bag"]

  useEffect(() => {
    const prefillFormData = () => {
      const postItem = posts.find(post => post.id === +id);
      setFormData({
        title: postItem.title,
        description: postItem.description,
        img_url: postItem.img_url,
        categories: postItem.categories
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
    <form className="edit" onSubmit={(e) => {
      e.preventDefault();
      handleUpdate(id, formData);
    }}>
      <h3 className="edit-title">Edit My Collection</h3>
      <label>
        Name of Collection:
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
      <label className="category">Category:
              <select
          value={categories}
          name="categories"
          required
          onChange={handleChange} >
          <option value="" >Make a Selection</option>
          {categoriesOptions.map((category, index) =>
            <option value={category} key={index} >{category}</option>
          )}

        </select>
      </label>
      <button className="submit-button">Submit</button>
    </form>
  )
}
