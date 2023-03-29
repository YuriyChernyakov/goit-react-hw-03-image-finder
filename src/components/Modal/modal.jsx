import css from '../styles.module.css';
import PropTypes from 'prop-types';

export const Modal = ({
  item,
  closeModal,
}) => {

  return (
    <div className={css.overlay} onClick={(e) => closeModal(e)}>
      <div className={css.modal}>
        <img src={item.largeImageURL} alt=""/>
      </div>
    </div>
  );
};

Modal.propTypes = {
  item: PropTypes.string,
};
