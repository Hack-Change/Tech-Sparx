import React, { useState } from 'react'
import Guild from '../../components/Guild/Guild'
import style from './guilds.module.scss'

import { guilds } from './guilds' //временный импорт пока нет бэка 

import ReactPaginate from 'react-paginate'

const Guilds = () => {
  const [guild, setGuilds] = useState(guilds.guilds)
  const [pageQty, setPageQty] = useState(guilds.guilds.length / guilds.countPerPage)

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + guilds.countPerPage;

  const currentItems = guild.slice(itemOffset, endOffset)

  const handlePageClick = (event) => {
    const newOffset = (event.selected * guilds.countPerPage) % guild.length;
    setItemOffset(newOffset)
  }
  
  return (
    <div className={style.wrapper}>
      <p className={style.title}>МТС Didgital</p>
      <p className={style.subtitle}>Гильдии</p>
      <p className={style.discription}>Просмотр сотрудников</p>
      <Guild currentItems={currentItems} />
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
  )
}

export default Guilds
