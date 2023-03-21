import css from '../styles.module.css';
import PropTypes from 'prop-types';

export const Modal = ({ item }) => {
  
  // componentDidMount() {
  //   window.addEventListener('keydown', this.handleEscpClick);
  // }
  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.handleEscpClick);
  // }
  // handleEscpClick = e => {
  //   if (e.code === 'Escape') {
  //     this.props.closeModal();
  //   }
  // };
  // onClick = e => {
  //   if (e.target === e.currentTarget) {
  //     this.props.closeModal();
  //   }
  // };
  return (<div className={css.overlay} tabindex='-1'>
    <div className={css.modal}>
      <img src={item.largeImageURL} alt="" />
    </div>
  </div>
  )
}

Modal.propTypes = {
  item: PropTypes.string.isRequired,
};
