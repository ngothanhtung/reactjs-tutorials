import styles from './Avatar.module.css';
type Props = {};

export default function Avatar({}: Props) {
  return <img src='/images/avatar.jpeg' className={styles.avatar} alt='Kelly White' />;
}
