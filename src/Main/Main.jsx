import React from 'react'
import Dahboard from '../components/Dashboard/Dashboard'
import style from './main.module.scss'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className={style.main}>
      <Dahboard />
      <div className={style.outlet}>
        <Outlet />
      </div>
    </div>
  )
}

export default Main
