import { ImageGalleryItem } from "components/ImageGalleryItem/imageGalleryItem";
import css from '../styles.module.css';
import PropTypes from 'prop-types';

export const ImageGallery = ({ newGallery, onPushUl }) => {
  return (<ul className={css.imageGallery}>
    {newGallery.map(({ id, webformatURL, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        id={id}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
        onPushLi = {onPushUl}
      />
    ))}
  </ul>)
}

ImageGallery.propTypes = {
  newGallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  onPushUl: PropTypes.func.isRequired,
};