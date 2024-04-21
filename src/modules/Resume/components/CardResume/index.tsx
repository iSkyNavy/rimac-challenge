import { Card } from "@components/Card";
import FamilyIcon from "@assets/icons/family.svg";

import styles from "./index.module.scss";

export const CardResume = () => {
	return (
		<Card>
			<span>Precios calculados para:</span>
			<div>
				<FamilyIcon />
				<h5>Rocio Miranda Díaz</h5>
			</div>
			<hr className={styles.c_card_resume__separator} />
			<div>
				<span>Responsable de pago</span>
				<span>DNI: 74778589</span>
				<span>Celular: 74778589</span>
			</div>
			<div>
				<span>Plan elegido</span>
				<span>Plan en Casa y Clínica</span>
				<span>Costo del Plan: $99 al mes</span>
			</div>
		</Card>
	);
};
