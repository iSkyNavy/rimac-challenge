import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardResume } from "src/modules/Resume/components/CardResume";
import { publicRoutesPath } from "@routes/routes";
import { BackButton } from "@components/BackButton";
import { useWindowSize } from "@hooks/useWindowSize";
import { useUserProviderHook } from "@hooks/useUserProviderHook";
import { StepsBar } from "@components/StepsBar";
import { QUOTE_OPTIONS } from "@constants/app";
import { BREAKPOINTS } from "@constants/breakpoints";
import styles from "./index.module.scss";

const ResumePage = () => {
	const [isPageLoading, setIsPageLoading] = useState(true);
	const { width } = useWindowSize();
	const navigate = useNavigate();
	const { user } = useUserProviderHook();
	const { hasSession } = user;

	const isMobile = width <= BREAKPOINTS.SM;

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
			{!isMobile && (
				<div className={styles.p_resume__steps}>
					<StepsBar currentIndex={2} steps={QUOTE_OPTIONS} />
				</div>
			)}
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
