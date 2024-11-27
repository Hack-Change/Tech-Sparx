import React from 'react'
import { useParams } from 'react-router-dom'
import style from './guildMembers.module.scss'

const GuildMembers = () => {

  const { guildName } = useParams()

  return (
    <div className={style.container}>
        <p className={style.title}>MTC Digital</p>
        <p className={style.guild}>{guildName.split('_').join(' ')}</p>
        <p className={style.subtitle}>Просмотр сотрудников</p>
    </div>
  )
}

export default GuildMembers
