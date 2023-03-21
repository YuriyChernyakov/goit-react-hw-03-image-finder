import css from '../styles.module.css';
import PropTypes from 'prop-types';

export const Button = ({ onPushBut }) => {
    return (
        <button className={css.button} onClick={() => { onPushBut() }}
            type="sbutton">Load more</button>
    )
}

Button.propTypes = {
  onPushBut: PropTypes.func.isRequired,
};
