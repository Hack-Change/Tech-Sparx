import React from 'react'
import style from './filter.module.scss'
import Input from '../Input/Input'
import Checkbox from '../Checkbox/Checkbox'

import { ReactComponent as Mail } from '../../assets/mail.svg'
import { ReactComponent as Calendar } from '../../assets/calendar.svg'
import { ReactComponent as Phone } from '../../assets/phone.svg'
import { ReactComponent as Book } from '../../assets/book.svg'

import Select from 'react-select'
import makeAnimated from 'react-select/animated'

const animatedComponents = makeAnimated();

const guilds = [
    { value: "Big Data", label: "Big Data" },
    { value: "Big Data", label: "Big Data" },
    { value: "Big Data", label: "Big Data" },
    { value: "Big Data", label: "Big Data" },
    { value: "Big Data", label: "Big Data" },
    { value: "Big Data", label: "Big Data" },
    { value: "Big Data", label: "Big Data" },
    { value: "AI", label: "AI" },
    { value: "AI", label: "AI" },
    { value: "AI", label: "AI" },
    { value: "AI", label: "AI" },
  ];

const Filter = ({ isOpen, changeFilter }) => {
  return (
    <div className={`${style.filter__bg} ${isOpen == false && style.hiddend}`}>
      <div className={style.filter}>
        <div className={style.btn__container}>
            <button className={style.close__btn} onClick={changeFilter}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className={style.svg} d="M9.066 1.99502C9.13766 1.92587 9.19484 1.84314 9.23419 1.75165C9.27353 1.66017 9.29427 1.56176 9.29518 1.46218C9.29609 1.3626 9.27716 1.26383 9.2395 1.17164C9.20183 1.07945 9.14618 0.995685 9.0758 0.925232C9.00541 0.85478 8.9217 0.799051 8.82954 0.761297C8.73739 0.723543 8.63864 0.70452 8.53905 0.705338C8.43947 0.706156 8.34104 0.726799 8.24952 0.766062C8.158 0.805325 8.07522 0.862422 8.006 0.934021L5 3.93902L1.995 0.934021C1.92634 0.860334 1.84354 0.801232 1.75154 0.76024C1.65954 0.719248 1.56022 0.697206 1.45952 0.695429C1.35882 0.693652 1.25879 0.712177 1.1654 0.749898C1.07201 0.787619 0.987178 0.843764 0.915959 0.914983C0.84474 0.986201 0.788596 1.07103 0.750875 1.16442C0.713154 1.25781 0.694629 1.35784 0.696406 1.45854C0.698183 1.55925 0.720225 1.65856 0.761217 1.75056C0.802208 1.84256 0.861311 1.92536 0.934997 1.99402L3.938 5.00002L0.932998 8.00502C0.800518 8.1472 0.728394 8.33524 0.731822 8.52954C0.735251 8.72384 0.813963 8.90923 0.951376 9.04664C1.08879 9.18406 1.27417 9.26277 1.46847 9.2662C1.66278 9.26962 1.85082 9.1975 1.993 9.06502L5 6.06002L8.005 9.06602C8.14717 9.1985 8.33522 9.27063 8.52952 9.2672C8.72382 9.26377 8.90921 9.18506 9.04662 9.04764C9.18403 8.91023 9.26274 8.72484 9.26617 8.53054C9.2696 8.33624 9.19748 8.1482 9.065 8.00602L6.062 5.00002L9.066 1.99502Z" fill="#656565"/>
                </svg>
            </button>
        </div>
        <div className={style.info__container}>
            <div className={style.input__box}>
                <Input placeholder='Введите Emal адрес' label='Эл. почта' svg={<Mail />}/>
                <Input placeholder='Введите телефон' label='Телефон' svg={<Phone />}/>
                <Input placeholder='Не указано' type='date' label='Дата рождения' svg={<Calendar />}/>
                <Input placeholder='Введите образование' label='Образование' svg={<Book />}/>
            </div>
            <div className={style.select__wrapper}>
            <label htmlFor="teach_select" className={style.label}>Гильдия</label>
            <Select closeMenuOnSelect={true} components={animatedComponents} className={style.select} options={guilds} placeholder='Выберите гильдию'
                maxMenuHeight={200}
            />
            </div> 
            <div className={style.projects}>
                <p className={style.projects__title}>Проекты</p>
                <div className={style.checkbox__container}>
                    <Checkbox />
                    <Checkbox />
                    <Checkbox />
                    <Checkbox />
                    <Checkbox />
                </div>
            </div>
            <div className={style.skills}>
                <p className={style.skills__title}>Навыки и компитенции</p>
                <div className={style.checkbox__container}>
                    <Checkbox />
                    <Checkbox />
                    <Checkbox />
                    <Checkbox />
                    <Checkbox />
                </div>
            </div>
            <div className={style.btn__wrap}>
                <button className={style.btn}>Найти</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
