import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
  //regex found at https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url,

  // const urlCheck = new RegExp(
  //   /\b(https?:\/\/\S+(?:png|jpe?g|gif|photo)\S*)\b/gim
  // );
  // const checkImage = () => {
  //   if (urlCheck.test(imageAdd)) {
  //     return (
  //       <button className="photo-button" type="button" onClick={handleImage}>
  //         Add Image
  //       </button>
  //     );
  //   } else {
  //     return (
  //       <p className="taken-message">
  //         Please enter a valid image URL if you would like to add a photo
  //       </p>
  //     );
  //   }
  // };
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleUpdate(id, formData);
    }}>
      <h3>Edit a Post</h3>
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
        Name:
        <input
          type='text'
          name='description'
          value={description}
          onChange={handleChange}
        />
      </label>
      <label>
        Name:
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
