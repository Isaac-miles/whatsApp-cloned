import {Fragment}from 'react'
import Header from '../components/Header'
import MainChat from '../components/MainChat'
import Sidebar from '../components/Sidebar'

export default function App() {
  return (
    <Fragment>
     <Header/>
      <Sidebar/> 
       <MainChat/> 
    </Fragment>
  )
}
