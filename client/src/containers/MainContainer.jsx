import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import {
  getAllCourses,
  postCourse,
  destroyCourse,
  putCourse,
} from "../services/courses";
import { getAllTopics } from "../services/topics";
import Landing from "../screens/Landing/Landing";
import AllCourses from "../screens/All/AllCourses";
import CourseDetail from "../screens/CourseDetail/CourseDetail";
import CourseCreate from "../screens/CourseCreate/CourseCreate";
import CourseEdit from "../screens/CourseEdit/CourseEdit";
import TechClasses from "../screens/TechClasses/TechClasses";

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
    history.push("/courses");
  };

  const handleUpdate = async (id, formData) => {
    const updatedCourse = await putCourse(id, formData);
    setCourses((prevState) =>
      prevState.map((course) => {
        return course.id === Number(id) ? updatedCourse : course;
      })
    );
    history.push("/courses");
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
      <Route path="/courses/:id/edit">
        <CourseEdit
          courses={courses}
          handleUpdate={handleUpdate}
          topics={topics}
        />
      </Route>

      <Route path="/courses/:id">
        <CourseDetail
          currentUser={currentUser}
          handleDelete={handleDelete}
          topics={topics}
        />
      </Route>
      <Route path="/courses">
        <AllCourses courses={courses} />
      </Route>
      <Route path="/tech">
        <TechClasses courses={courses} />
      </Route>
      <Route path="/courses/cooking"></Route>

      <Route path="/courses/dancing"></Route>

      <Route exact path="/">
        <Landing />
      </Route>
    </Switch>
  );
}
