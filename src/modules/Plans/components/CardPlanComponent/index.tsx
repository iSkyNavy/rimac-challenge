import { FC, ReactNode } from "react";
import { Card } from "@components/Card";
import styles from "./index.module.scss";

interface Props {
	id: number;
	title: string;
	Icon: ReactNode;
	description: Array<string>;
	price: number;
	onClick: () => void | Promise<void>;
}
export const CardPlanComponent: FC<Props> = ({ title, Icon, price, description, onClick }) => {
	const handleSelectPlan = async () => {
		if (onClick instanceof Promise) await onClick();
		else onClick();
	};
	return (
		<Card className={styles.c_card_plan}>
			<div className={styles.c_card_plan__container}>
				<div>
					<div className={styles.c_card_plan__header}>
						<h5>{title}</h5>
						{Icon}
					</div>
					<span className={styles.c_card_plan__caption}>COSTO DEL PLAN</span>
					<span className={styles.c_card_plan__price}>${price} al mes</span>
					<hr className={styles.c_card_plan__separator} />
					<ul className={styles.c_card_plan__list}>
						{description.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
				<button className={styles.c_card_plan__button} onClick={() => handleSelectPlan()}>
					Seleccionar Plan
				</button>
			</div>
		</Card>
	);
};
