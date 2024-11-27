import React from 'react'
import { Link } from 'react-router-dom'
import style from './guild.module.scss'
import ArrowBtn from '../ArrowBtn/ArrowBtn'
import { guilds } from '../../pages/Guilds/guilds'

const Guild = ({ currentItems }) => {
  return (
    <div className={style.guilds__box}>
      {currentItems.map(item => (
        <Link to={item.guildName.split(' ').join('_')} className={style.guild}>
          <span className={style.guildName}>{item.guildName}</span>
          <ArrowBtn />
        </Link>
      ))}
    </div>
  )
}

export default Guild
