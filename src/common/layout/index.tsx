import { Outlet } from "react-router-dom";
import { Header } from "@components/Header";

import styles from "./index.module.scss";

export const Layout = () => {
	return (
		<div className={styles.layout}>
			<Header />
			<Outlet />
		</div>
	);
};
