import "./CourseEdit.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CourseEdit(props) {
  const [formData, setFormData] = useState({
    title: "",
    info: "",
    price: null,
    img_url: "",
    topic_id: "",
  });

  const { title, info, price, img_url, topic_id } = formData;
  const { courses, handleUpdate, topics } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const courseItem = courses.find((course) => course.id === Number(id));
      setFormData({
        title: courseItem.title,
        info: courseItem.info,
        price: courseItem.price,
        img_url: courseItem.img_url,
        topic_id: courseItem.topic_id
        

      });
      
    };
    if (courses.length) {
      prefillFormData();
      console.log('formData',formData)
    }
    
  }, [courses, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    
    <form onSubmit={(e) => {
    e.preventDefault();
    handleUpdate(id, formData);
    }}>
      
      
    <h3>Edit Course</h3>
    <label>Title:
      <input
        type='text'
        name='title'
        value={title}
        onChange={handleChange}
      />
      </label>
      <label>Info:
      <input
        type='text'
        name='info'
        value={info}
        onChange={handleChange}
      />
      </label>
      <label>Image:
      <input
        type='text'
        name='img_url'
        value={img_url}
        onChange={handleChange}
      />
      </label>
      <label>:
      <input
        type='number'
        name='price'
        value={price}
        onChange={handleChange}
      />
    </label>
      <br />

      <select onChange={handleChange} name='topic_id'>
      {topics?.map((topic) => {
          return (
            <option key={topic.id} value={topic.id}
            selected={topic.id === topic_id}>
              {topic.category}
            </option>
          );
        })}
        

      </select>
      
      <button>Submit</button>
      
  </form>
  )
}
