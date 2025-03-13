import styles from "../components/Header.module.css";
import rocketLogo from "../assets/rocket.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketLogo} alt="logotipo" />
    </header>
  );
}
