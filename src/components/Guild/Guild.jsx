import React from 'react'
import style from './guild.module.scss'
import ArrowBtn from '../ArrowBtn/ArrowBtn'
import { guilds } from '../../pages/Guilds/guilds'

const Guild = ({ currentItems }) => {
  return (
    <div className={style.guilds__box}>
      {currentItems.map(item => (
        <div className={style.guild}>
          <span className={style.guildName}>{item.guildName}</span>
          <ArrowBtn />
        </div>
      ))}
    </div>
  )
}

export default Guild
