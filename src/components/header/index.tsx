import styles from './styles.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <strong>
        Feed<span>In</span>
      </strong>
    </header>
  );
}
