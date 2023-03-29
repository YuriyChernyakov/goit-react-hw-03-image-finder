import css from '../styles.module.css';
import PropTypes from 'prop-types';

export const Button = ({ onPushBut }) => {
  return (
      <div className={css.buttonSize}>
        <button className={css.button} onClick={() => { onPushBut() }}
        type="sbutton">Load more</button>
    </div>
    )
}

Button.propTypes = {
  onPushBut: PropTypes.func.isRequired,
};
