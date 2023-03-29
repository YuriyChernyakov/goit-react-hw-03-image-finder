import css from '../styles.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ id, webformatURL, onPushLi }) => {
  return (<li onClick={() => { onPushLi(id) }} className={css.imageGalleryItem} key={id}>
          <img className={css.imageGalleryItemImage} src={webformatURL} alt="Альтернативний текст"/>
      </li>)
}

ImageGalleryItem.propTypes = {
  onPushLi: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
};




