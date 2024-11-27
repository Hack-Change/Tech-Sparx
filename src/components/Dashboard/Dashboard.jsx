import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import style from './dashboard.module.scss'

const Dashboard = () => {
  const { pathname } = useLocation();

  return (
    <div className={style.dashboard}>
      <div className={style.wrapper}>
        <Logo />
        <nav className={style.navbar}>
          <Link to='/' className={`${pathname.endsWith('main') && style.active}`}>Главная</Link>
          <Link to='/workers' className={`${(pathname.endsWith('workers') || pathname.includes('workers')) && style.active}`}>Сотрудники</Link>
          <Link to='/guilds' className={`${(pathname.endsWith('guilds') || pathname.includes('guilds')) && style.active}`}>Гильдии</Link>
        </nav>
      </div>
    </div>
  )
}

export default Dashboard
