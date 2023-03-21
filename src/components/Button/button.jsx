import css from '../styles.module.css'

export const Button = ({ onPushBut }) => {
    return (
        <button className={css.button} onClick={() => { onPushBut() }}
            type="sbutton">Load more</button>
    )
}