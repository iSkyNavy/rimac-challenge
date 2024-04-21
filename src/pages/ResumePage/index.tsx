import { BackButton } from "@components/BackButton";
import { StepsSection } from "src/modules/Shared/sections/StepsSection";

import styles from "./index.module.scss";
import { useWindowSize } from "@hooks/useWindowSize";
import { CardResume } from "src/modules/Resume/components/CardResume";

const ResumePage = () => {
	const { width } = useWindowSize();

	const isMobile = width <= 768;

	return (
		<>
			<StepsSection />
			<div className="i-container">
				{!isMobile && (
					<div className={styles.p_resume__back_button_wrapper}>
						<BackButton theme="blue" label="Volver" />
					</div>
				)}
				<h4 className={styles.p_resume__title}>Resumen del seguro</h4>
				<CardResume />
			</div>
		</>
	);
};

export default ResumePage;
