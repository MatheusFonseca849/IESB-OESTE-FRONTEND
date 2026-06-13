import styles from './Button.module.css'

export const Button = ({action, children}: {action: () => void, children: React.ReactNode}) => {
    return <button onClick={action} className={styles.button}>{children}</button>
}
