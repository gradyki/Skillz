import React from 'react'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'

export default function Layout(props) {
  const { currentUser, handleLogout } = props
  return (
    <div className='layout-div'>
      <Nav currentUser={currentUser} handleLogout={handleLogout}/>
      {props.children}
      <Footer />
    </div>
  )
}


