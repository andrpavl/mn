import { NavLink, Outlet } from "react-router-dom";
import styles from"./SharedLayout.module.css";

export default function SharedLayout() {
	return (
		<>
			<header className={styles.header}>
				<nav className={styles.nav}>
					<NavLink to="/" end className={styles.navLink}>
						Головна
					</NavLink>
					<NavLink to="/fundraising" className={styles.navLink}>
						Відкриті збори
					</NavLink>
					<NavLink to="/streams" className={styles.navLink}>
						Стріми
					</NavLink>
				</nav>
			</header>

			<main className="main">
				<Outlet />
			</main>
		</>
	);
}
