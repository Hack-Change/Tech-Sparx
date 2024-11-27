import React from 'react'
import style from './infoBox.module.scss'

const InfoBox = ({name, role, width}) => {
  return (
    <div className={style.info__box}>
      <span>{name}</span>
      <span>{role}</span>
    </div>
  )
}

export default InfoBox
