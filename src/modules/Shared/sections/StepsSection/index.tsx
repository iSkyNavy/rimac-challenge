import { useWindowSize } from "@hooks/useWindowSize";
import { ProgressSteps } from "@components/ProgressSteps";
import { StepsBar } from "@components/StepsBar";
import { QUOTE_OPTIONS } from "@constants/app";
import { BREAKPOINTS } from "@constants/breakpoints";
import styles from "./index.module.scss";

export const StepsSection = () => {
	const { width } = useWindowSize();
	const isMobile = width < BREAKPOINTS.SM;
	return (
		<div className={styles.s_steps__wrapper}>
			<div className={`${styles.s_steps} i-container`}>
				{isMobile ? (
					<ProgressSteps current={1} total={2} />
				) : (
					<StepsBar steps={QUOTE_OPTIONS} currentIndex={1} />
				)}
			</div>
		</div>
	);
};
