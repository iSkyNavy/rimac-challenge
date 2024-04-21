import styles from "./index.module.scss";

import { useWindowSize } from "@hooks/useWindowSize";
import { ProgressSteps } from "@components/ProgressSteps";
import { StepsBar } from "@components/StepsBar";
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
const active = 1;

export const StepsSection = () => {
	const { width } = useWindowSize();
	const isMobile = width < 768;
	return (
		<div className={styles.s_steps__wrapper}>
			<div className={`${styles.s_steps} i-container`}>
				{isMobile ? (
					<ProgressSteps current={1} total={2} />
				) : (
					<StepsBar steps={steps} currentIndex={active} />
				)}
			</div>
		</div>
	);
};
