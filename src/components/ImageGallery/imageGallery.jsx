import { ImageGalleryItem } from "components/ImageGalleryItem/imageGalleryItem";
import css from '../styles.module.css'

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