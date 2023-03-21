import css from '../styles.module.css'

export const Searchbar = ({ onSubmit, findName }) => {
    return (
      <header className={css.searchbar}>
  <form className={css.searchForm}>
                <button
            onClick={(event) => { onSubmit(event) }}
            type="submit" className={css.searchFormButton}>
      <span>Search</span>
    </button>

    <input
      onChange={findName}
      className={css.searchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
        </header>)
}
