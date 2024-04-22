import { BackButton } from "@components/BackButton";

import styles from "./index.module.scss";
import { useWindowSize } from "@hooks/useWindowSize";
import { CardResume } from "src/modules/Resume/components/CardResume";
import { useNavigate } from "react-router-dom";
import { StepsBar } from "@components/StepsBar";
import { useEffect, useState } from "react";
import { publicRoutesPath } from "@routes/routes";
import { useUserProviderHook } from "@hooks/useUserProviderHook";
// import {  } from "react-router";

const steps = [
	{
		index: 1,
		label: "Planes y coberturas",
	},
	{
		index: 2,
		label: "Resumen",
	},
];

const ResumePage = () => {
	const [isPageLoading, setIsPageLoading] = useState(true);
	const { width } = useWindowSize();
	const navigate = useNavigate();
	const { user } = useUserProviderHook();
	const { hasSession } = user;

	const isMobile = width <= 768;

	const handleBackButton = () => {
		navigate(-1);
	};
	useEffect(() => {
		if (!hasSession) return navigate(publicRoutesPath.HomePage);
		setIsPageLoading(false);
	}, []);

	if (isPageLoading) {
		return <p>...Cargando</p>;
	}

	return (
		<>
			<div className={styles.p_resume__steps}>
				<StepsBar currentIndex={2} steps={steps} />
			</div>
			<div className={styles.p_resume}>
				<div className="i-container">
					{!isMobile && (
						<div className={styles.p_resume__back_button_wrapper}>
							<BackButton theme="blue" label="Volver" onClick={handleBackButton} />
						</div>
					)}
					<h4 className={styles.p_resume__title}>Resumen del seguro</h4>
					<CardResume />
				</div>
			</div>
		</>
	);
};

export default ResumePage;
