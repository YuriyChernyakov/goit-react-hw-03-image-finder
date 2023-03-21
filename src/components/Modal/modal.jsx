import css from '../styles.module.css'

export const Modal = ({ item }) => {
  return (<div className={css.overlay} tabindex='-1'>
    <div className={css.modal}>
      <img src={item.largeImageURL} alt="" />
    </div>
  </div>
  )
}