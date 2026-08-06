import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import styles from "./Theme.module.scss"

export const ThemeToggle:React.FC = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemeContext not found");
  }

  const { theme, toggleTheme } = context;

  return (
    <button 
      className={`${styles.toggleBtn} ${theme === 'dark' ? styles.activeDark : styles.activeLight}`} 
      onClick={toggleTheme}
    >
      <div className={styles.iconWrapper}>
        {theme === 'dark' ? (
          <CiLight className={styles.icon} />
        ) : (
          <CiDark className={styles.icon} />
        )}
      </div>
    </button>
  );
}