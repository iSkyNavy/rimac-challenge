import React from "react";

import styles from "./index.module.scss";

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const Card = ({ children, className }: Props) => {
	return <div className={`${styles.c_card} ${className}`}>{children}</div>;
};
