import classNames from 'classnames'

import styles from './Button.module.scss'

const Button = ({ className, disabled = false, children, type = 'button', onClick }) => {
  return (
    <button type={type} className={classNames(styles.root, className)} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
