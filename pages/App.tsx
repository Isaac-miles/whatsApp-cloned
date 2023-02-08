import {Fragment}from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Main from '../components/utils/Main'

export default function App() {
  return (
    <Fragment>
     <Header/>
      <Sidebar/> 
       <Main/> 
    </Fragment>
  )
}
