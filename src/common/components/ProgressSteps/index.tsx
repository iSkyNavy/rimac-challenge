import { FC } from "react";
import { BackButton } from "@components/BackButton";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

interface Props {
	total: number;
	current: number;
}
export const ProgressSteps: FC<Props> = ({ current, total }) => {
	const navigate = useNavigate();
	const handleBackButton = () => {
		navigate(-1);
	};
	return (
		<div className={styles.c_progress_steps}>
			<BackButton theme="gray" onClick={handleBackButton} />
			Paso {current} de {total}
			<div className={styles.c_progress_steps__line}>
				<div className={styles.c_progress_steps__current}></div>
			</div>
		</div>
	);
};
