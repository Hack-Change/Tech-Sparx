import React from 'react'
import style from './arrow.module.scss'
import {ReactComponent as Arrow} from '../../assets/arrow.svg'

const ArrowBtn = () => {
  return (
    <button className={style.btn}>
        <Arrow />
    </button>
  )
}

export default ArrowBtn
