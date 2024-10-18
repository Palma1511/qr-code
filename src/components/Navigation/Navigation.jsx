import { Link } from "react-router-dom";
import styles from "./Navigation.module.css"
export function Navigation() {
    return (
        <nav className={styles.nav}>
            <Link to="/generate" className={styles.but}>Генератор QR-code</Link>
            <Link to="/scaner" className={styles.but}>Сканировать QR-code</Link>
            <Link to="/generate-history" className={styles.but}>История генерации QR-code</Link>
            <Link to="/scaner-history" className={styles.but}>История сканирования QR-code</Link>
        </nav>
    )
}