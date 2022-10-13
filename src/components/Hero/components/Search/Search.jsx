import style from './Search.module.scss'

const Search = () => {
  return (
    <div className={style.searchBox}>
        <input className={style.searchInput} type="text" placeholder='Start typing the name of your drug...'/>
        <button className={style.drugButton}>Find My Drug</button>
    </div>
  )
}

export default Search