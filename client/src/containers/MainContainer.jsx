import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { getAllCourses } from '../services/courses'
import { getAllTopics } from '../services/topics'
import Landing from '../screens/Landing/Landing'
import AllCourses from '../screens/All/AllCourses'

export default function MainContainer() {
  const [courses, setCourses] = useState([])
  const [topics, setTopics] = useState([])

  useEffect(() => {
    const fetchCourses = async () => {
      const coursesList = await getAllCourses()
      setCourses(coursesList)
      console.log('this is courseslist', coursesList)
    }
  
    fetchCourses()
  }, [])

  
  useEffect(() => {
    const fetchTopics = async () => {
      const topicsList = await getAllTopics()
      setTopics(topicsList)

    }
    fetchTopics()
  },[])

  return (
    <Switch>
      <Route exact path='/'>
        <Landing />
      </Route>
      <Route path='/courses'>

        <AllCourses courses={courses}/>
        </Route>
    </Switch>
  )
}
