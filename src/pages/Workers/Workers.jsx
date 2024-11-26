import React, { useState } from 'react'
import style from './workers.module.scss'
import { workers } from './workersList'
import WorkerCards from '../../components/WorkerCards/WorkerCards'

import ReactPaginate from 'react-paginate'
import Filter from '../../components/Filter/Filter'

const Workers = () => {
  const countPerPage = 4;

  const [isOpen, setIsOpen] = useState(false)
  const [pageQty, setPageQty] = useState(workers.length / countPerPage)
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + countPerPage;

  const currentItems = workers.slice(itemOffset, endOffset)

  const handlePageClick = (event) => {
    const newOffset = (event.selected * countPerPage) % workers.length;
    setItemOffset(newOffset)
  }

  const changeFilter = () => setIsOpen(!isOpen)

  return (
    <>
      <div className={`${style.workers__box} ${isOpen && style.unactive}`}>
        <p className={style.title}>Воспользуйтесь поиском по косвенным признакам</p>
        <div className={style.list}>
          <div className={style.parametrs}>
            <span>Сотрудник</span>
            <span>Телефон</span>
            <span>Должность</span>
            <span>Гильдия</span>
            <span>Навыки</span>
            <button className={style.btn__filter} onClick={changeFilter}>
              <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={style.svg} d="M15.5 1H1.5L6.5 7.5V17L10.5 13V7.5L15.5 1Z" stroke="#FF0032" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          <div className={style.workers__list}>
            <WorkerCards currentItems={currentItems}/>
          </div>
        </div>
        <ReactPaginate 
          previousLabel='<'
          nextLabel='>'
          onPageChange={handlePageClick}
          pageCount={pageQty}
          renderOnZeroPageCount={null} 
          className={style.pagination}
          activeClassName={style.active__btn}
          previousClassName={style.previous__btn}
          nextClassName={style.next__btn}
        />
      </div>

      <Filter isOpen={isOpen} changeFilter={changeFilter}/>
    </>
  )
}

export default Workers
