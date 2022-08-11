import classNames from 'classnames'

import styles from './Input.module.scss'

const Input = ({ type = 'text', id, name, className, value, label, onChange }) => {
  return (
    <div className={classNames(styles.root, className)}>
      {type === 'textarea' ? (
        <textarea id={id} name={name} value={value} onChange={onChange} className={styles.textarea} />
      ) : (
        <input id={id} type={type} name={name} value={value} onChange={onChange} className={styles.inpit} />
      )}
      <label htmlFor={id} className={classNames(styles.label, { [styles.active]: value })}>
        {label}
      </label>
    </div>
  )
}

export default Input
