import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import style from './workerInfo.module.scss'
import InfoBox from '../../components/InfoBox/InfoBox';
import Skill from '../../components/Skill/Skill';
import { workers } from '../Workers/workersList';
import {ReactComponent as User} from '../../assets/User.svg';
import {ReactComponent as ArrowBack} from '../../assets/arrow__back.svg';

const WorkerInfo = () => {
    const { id } = useParams();
    const [currentWorker, setCurrentWorker] = useState(workers[id - 1])

  return (
    <div className={style.worker__info}>
        <div className={style.first__col}>
            <div className={style.img__container}>
                <div className={style.img__wrapper}>
                    <div className={style.svg}>{<User />}</div>
                    <p className={style.name}>{currentWorker.name}</p>
                    <p className={style.guild}>Гильдия {currentWorker.guild}</p>
                </div>
            </div>
            <div className={style.projects__container}>
                <p className={style.projects__title}>Проекты</p>
                <div className={style.table}>
                    <div className={style.parametrs}>
                        <span>Название</span>
                        <span>Роль</span>
                    </div>
                    <div className={style.projects}>
                        <>
                            {currentWorker.projects.map(item => {
                                return <InfoBox name={item.name} role={item.role} />
                            })}
                        </>
                    </div>
                </div>
            </div>
            <div className={style.btn__container}>
                <Link className={style.btn__back} to='/workers'>
                    <ArrowBack />
                    <span>К сотрудникам</span>
                </Link>
            </div>
        </div>
        <div className={style.second__col}>
            <p className={style.info__title}>Личная информация</p>
            <div className={style.info__table}>
                <InfoBox name='ФИО' role={currentWorker.name} />   
                <InfoBox name='Должность' role={currentWorker.role} />
                <InfoBox name='Email' role={currentWorker.mail} />
                <InfoBox name='Телефон' role={currentWorker.phone} />
                <p className={style.skills__title}>Навыки и компетенции</p>
                <div className={style.skills}>
                    <p className={style.skills__subtitle}>Навыки</p>
                    <div className={style.skills__box}>
                        {currentWorker.skills.map(skill => {
                            return <Skill skill={skill} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkerInfo
