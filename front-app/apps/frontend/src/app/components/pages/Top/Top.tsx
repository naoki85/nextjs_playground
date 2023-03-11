import styles from './Top.module.scss';

/* eslint-disable-next-line */
export interface TopProps {}

export function Top(props: TopProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Top!</h1>
    </div>
  );
}

export default Top;
