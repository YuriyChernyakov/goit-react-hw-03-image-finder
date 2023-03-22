import css from '../styles.module.css';
import PropTypes from 'prop-types';

export const Modal = ({ item}) => {
  
  return (<div className={css.overlay}>
    <div className={css.modal}>
      <img src={item.largeImageURL} alt="" />
    </div>
  </div>
  )
}

Modal.propTypes = {
  item: PropTypes.string,
};
