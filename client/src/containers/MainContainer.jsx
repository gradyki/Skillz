import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { getAllCourses, postCourse, destroyCourse } from "../services/courses";
import { getAllTopics } from "../services/topics";
import Landing from "../screens/Landing/Landing";
import AllCourses from "../screens/All/AllCourses";
import CourseDetail from "../screens/CourseDetail/CourseDetail";
import CourseCreate from "../screens/CourseCreate/CourseCreate";

export default function MainContainer(props) {
  const [courses, setCourses] = useState([]);
  const [topics, setTopics] = useState([]);
  const history = useHistory();

  const { currentUser } = props;

  useEffect(() => {
    const fetchCourses = async () => {
      const coursesList = await getAllCourses();
      setCourses(coursesList);
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    const fetchTopics = async () => {
      const topicsList = await getAllTopics();
      setTopics(topicsList);
    };
    fetchTopics();
  }, []);

  const handleCreate = async (formData) => {
    const newCourse = await postCourse(formData);
    setCourses((prevState) => [...prevState, newCourse]);
    history.push("/courses");
  };

  const handleDelete = async (id) => {
    await destroyCourse(id);
    setCourses((prevState) => prevState.filter((course) => course.id !== id));
  };

  return (
    <Switch>
      <Route path="/courses/new">
        <CourseCreate
          handleCreate={handleCreate}
          topics={topics}
          courses={courses}
        />
      </Route>

      <Route path="/courses/:id">
        <CourseDetail currentUser={currentUser} handleDelete={handleDelete} />
      </Route>
      <Route path="/courses">
        <AllCourses courses={courses} />
      </Route>

      <Route exact path="/">
        <Landing />
      </Route>
    </Switch>
  );
}
