import React from 'react'
import style from './checkbox.module.scss'

const Checkbox = () => {
  return (
    <label className={style.custom__checkbox}>
      <input type="checkbox" />
      <span>JavaScript</span>
    </label>
  )
}

export default Checkbox
