import './CourseCreate.css'
import { useState } from 'react'

export default function FoodCreate(props) {
  const [formData, setFormData] = useState({
    title: '',
    info: '',
    price: null,
    img_url: '',
  });
  const { title, info, price, img_url, topic } = formData;
  const { handleCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      handleCreate(formData);
    }}>
      <h3>Create Course</h3>
      <label>Title:
        <input
          type='text'
          name='title'
          value={title}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>info:
        <input
          type='text'
          name='info'
          value={info}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>Image:
        <input
          type='text'
          name='img_url'
          value={img_url}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>price:
        <input
          type='number'
          name='price'
          value={price}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}
