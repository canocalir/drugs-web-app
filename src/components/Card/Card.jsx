import React from 'react'
import Name from './components/Name/Name'
import style from './Card.module.scss'
import Details from './components/Details/Details'

const Card = ({ drug }) => {
  const {rxcui, name} = drug
  return (
    <div className={style.card}>
      <Name name={name} rxcui={rxcui}/>
      <Details rxcui={rxcui}/>
    </div>
  )
}

export default Card