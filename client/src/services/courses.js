import api from './api-config'

export const getAllCourses = async () => {
  const resp = await api.get('/courses')
  return resp.data
} 

export const getOneCourse = async (id) => {
  const resp = await api.get(`/courses/${id}`)
  return resp.data
}

export const postCourse = async (courseData) => {
  const resp = await api.post('/courses', { course: courseData })
  return resp.data
}

export const putCourse = async (id, courseData) => {
  const resp = await api.put(`courses/${id}`, { course: courseData })
  return resp.data
}

export const destroyCourse = async (id) => {
  const resp = await api.delete(`/courses/${id}`)
  return resp
}