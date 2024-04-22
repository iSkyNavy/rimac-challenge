import { Card } from "@components/Card";
import FamilyIcon from "@assets/icons/family.svg";

import styles from "./index.module.scss";
import { Separator } from "@components/Separator";
import { useUserProviderHook } from "@hooks/useUserProviderHook";

export const CardResume = () => {
	const { user } = useUserProviderHook();
	const { name, lastName, phone, plan, documentType, documentNumber } = user;
	return (
		<Card className={styles.c_card_resume}>
			<span className={styles.c_card_resume__prices_title}>Precios calculados para:</span>
			<div className={styles.c_card_resume__header}>
				<FamilyIcon />
				<h5>
					{name} {lastName}
				</h5>
			</div>
			<Separator />
			<div className={styles.c_card_resume__user}>
				<span className={styles.c_card_resume__user__title}>Responsable de pago</span>
				<span className={styles.c_card_resume__user__detail}>
					{documentType}: {documentNumber}
				</span>
				<span className={styles.c_card_resume__user__detail}>Celular: {phone}</span>
			</div>
			<div className={styles.c_card_resume__user}>
				<span className={styles.c_card_resume__user__title}>Plan elegido</span>
				<span className={styles.c_card_resume__user__detail}>{plan?.name}</span>
				<span className={styles.c_card_resume__user__detail}>
					Costo del Plan: ${plan?.price} al mes
				</span>
			</div>
		</Card>
	);
};
