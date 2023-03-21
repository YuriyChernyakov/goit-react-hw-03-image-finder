import css from '../styles.module.css'

export const ImageGalleryItem = ({ id, webformatURL, onPushLi }) => {
  return (<li onClick={() => { onPushLi(id) }} className={css.imageGalleryItem} key={id}>
        <a>
          <img className={css.imageGalleryItemImage} src={webformatURL} alt="Альтернативний текст"/></a>
      </li>)
}




