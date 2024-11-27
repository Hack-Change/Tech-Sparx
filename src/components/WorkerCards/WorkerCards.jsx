import React from 'react'
import style from './workerCards.module.scss'
import { Link } from 'react-router-dom'

const WorkerCards = ({ currentItems }) => {
  return (
    <>
      {currentItems.map(item => (
        <Link to={`${item.id}`} className={style.card}>
            <div className={style.worker__name}>
              <svg width="43" height="43" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={style.svg} fill-rule="evenodd" clip-rule="evenodd" d="M13 2.16666C7.01671 2.16666 2.16663 7.01675 2.16663 13C2.16663 18.9832 7.01671 23.8333 13 23.8333C18.9832 23.8333 23.8333 18.9832 23.8333 13C23.8333 7.01675 18.9832 2.16666 13 2.16666ZM9.20829 10.2917C9.20829 9.79374 9.30637 9.30068 9.49692 8.84066C9.68747 8.38063 9.96676 7.96264 10.3188 7.61055C10.6709 7.25846 11.0889 6.97917 11.549 6.78862C12.009 6.59807 12.502 6.5 13 6.5C13.4979 6.5 13.9909 6.59807 14.451 6.78862C14.911 6.97917 15.329 7.25846 15.6811 7.61055C16.0332 7.96264 16.3125 8.38063 16.503 8.84066C16.6936 9.30068 16.7916 9.79374 16.7916 10.2917C16.7916 11.2973 16.3921 12.2617 15.6811 12.9728C14.97 13.6839 14.0056 14.0833 13 14.0833C11.9943 14.0833 11.0299 13.6839 10.3188 12.9728C9.60777 12.2617 9.20829 11.2973 9.20829 10.2917ZM19.7795 18.3993C18.9685 19.4194 17.9376 20.2431 16.7636 20.8089C15.5897 21.3747 14.3031 21.6679 13 21.6667C11.6968 21.6679 10.4102 21.3747 9.23628 20.8089C8.06234 20.2431 7.0314 19.4194 6.22046 18.3993C7.97654 17.1394 10.3729 16.25 13 16.25C15.627 16.25 18.0234 17.1394 19.7795 18.3993Z" fill="#FF0032"/>
              </svg>
              <span className={style.name}>{item.name}</span>
            </div>
            <span>{item.phone}</span>
            <span>{item.role}</span>
            <span>{item.guild}</span>
            <span>{item.skills.join(', ')}</span>
        </Link>
      ))}
    </>
  )
}

export default WorkerCards
