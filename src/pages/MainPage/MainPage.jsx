import React from 'react'
import style from './mainPage.module.scss'
import bg_video from '../../assets/main_background.mp4'

import { TypeAnimation } from 'react-type-animation';

const MainPage = () => {
  return (
    <div className={style.main}>
        <video className={style.video} autoPlay loop muted>
            <source src={bg_video} type='video/mp4' />
        </video>
      <TypeAnimation 
        sequence={[
            '',
            400,
            'Не помнишь имя сотрудника?',
            2000,
            '',
            1000,
            'И не помнишь какую должность он занимает?',
            2000,
            '',
            1000,
            'Воспользуйся дополнительной фильтрацией!',
            3000,
            '',
            1000
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ display: 'inline-block' }}
        className={style.video__text}
        speed={45}
        deletionSpeed={70}
      />
      <p className={style.text}>Приложение<br />поиска сотрудников<br />по косвенным признакам</p>
    </div>
  )
}

export default MainPage
