import "./CourseCreate.css";
import { useState } from "react";
import { getAllCourses } from "../../services/courses";
import CourseDetail from "../CourseDetail/CourseDetail";

export default function FoodCreate(props) {
  const [formData, setFormData] = useState({
    title: "",
    info: "",
    price: null,
    img_url: "",
    topic_id: "",
  });
  const { title, info, price, img_url } = formData;
  const { handleCreate, topics, courses } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
      }}
    >
      <h3>Create Course</h3>
      <label>
        Title:
        <input type="text" name="title" value={title} onChange={handleChange} />
      </label>
      <br />
      <label>
        info:
        <input type="text" name="info" value={info} onChange={handleChange} />
      </label>
      <br />
      <label>
        Image:
        <input
          type="text"
          name="img_url"
          value={img_url}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        price:
        <input
          type="number"
          name="price"
          value={price}
          onChange={handleChange}
        />
      </label>

      <select defaultValue="default" onChange={handleChange} name="topic_id">
        <option value="default" disabled>
          -- dummy --value
        </option>

        {topics.map((topic) => {
          return (
            <option key={topic.id} value={topic.id}>
              {topic.category}
            </option>
          );
        })}
      </select>
      <button>Submit</button>
    </form>
  );
}
