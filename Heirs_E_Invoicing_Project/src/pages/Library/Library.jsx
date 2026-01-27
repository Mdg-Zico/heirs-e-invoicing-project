import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import "../PageLayout/PageLayout.css"

export default function () {
  return (
    <div className='page-container'>
        <Sidebar/>
        <div className='main-content'></div>
    </div>
  )
}
