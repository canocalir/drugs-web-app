import React from 'react'
import Name from './components/Name/Name'
import style from './Card.module.scss'
import Details from './components/Details/Details'

const Card = () => {
  return (
    <div className={style.card}>
      <Name/>
      <Details/>
    </div>
  )
}

export default Card