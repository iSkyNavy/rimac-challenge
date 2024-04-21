import { BackButton } from "@components/BackButton";
import { useWindowSize } from "@hooks/useWindowSize";
import { StepsSection } from "src/modules/Shared/sections/StepsSection";
import styles from "./index.module.scss";
import { MainPlansSection } from "src/modules/Plans/sections/MainPlansSection";
import { useEffect, useState } from "react";
import { PlanProps } from "@models/PlansModel";
import { PlanService } from "@services/PlansService";

const PlansPage = () => {
	const [plans, setPlans] = useState<PlanProps[]>([]);
	const { width } = useWindowSize();

	const getPlans = async () => {
		const { list } = (await PlanService.getPlans()) || [];
		console.log(list);
		setPlans(list);
	};

	useEffect(() => {
		getPlans();
	}, []);

	const isMobile = width < 768;
	return (
		<div>
			<StepsSection />
			<div className="i-container">
				<div className={styles.p_plans__container}>
					{!isMobile && (
						<div className={styles.p_plans__back_button_wrapper}>
							<BackButton theme="blue" label="Volver" />
						</div>
					)}
					<MainPlansSection plans={plans} />
				</div>
			</div>
		</div>
	);
};

export default PlansPage;
