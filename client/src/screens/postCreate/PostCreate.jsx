import { useState } from 'react'

import "./PostCreate.css"

export default function PostCreate(props) {
  const { handleCreate, currentUser } = props;

  const [formData, setFormData] = useState({
    user_id: currentUser?.id,
    title: '',
    description: '',
    categories: '',
    img_url: ''
  })

  const categoriesOptions = ["Unknown", "Book", "Fossile", "Jewelry", "Game", "Toy", "Doll", "Tech", "Bag"]

  const { user_id, title, description, categories, img_url } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form className="create-form" className="create" onSubmit={(e) => {
      e.preventDefault();
      handleCreate(formData);
    }}>
      <h3 className="create-title">Create A Collection</h3>
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
        <textarea className="create-textarea"
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
          <option value="">Make a Selection</option>
          {categoriesOptions.map((category, index) =>
            <option value={category} key={index} >{category}</option>
          )}
        </select>
      </label>

      <button className="submit-button">Submit</button>
    </form>
  )
}
