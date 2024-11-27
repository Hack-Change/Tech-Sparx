import React from 'react'
import style from './skill.module.scss'

const Skill = ({skill}) => {
  return (
    <button className={style.skill}>
        {skill}
    </button>
  )
}

export default Skill
