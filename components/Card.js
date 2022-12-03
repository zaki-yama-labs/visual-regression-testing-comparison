import styles from "../styles/Card.module.css";

export const Card = ({ href, title, description }) => {
  return (
    <a href={href} className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
    </a>
  );
};
