import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StepsSection } from "src/modules/Shared/sections/StepsSection";
import { MainPlansSection } from "src/modules/Plans/sections/MainPlansSection";
import { publicRoutesPath } from "@routes/routes";
import { BackButton } from "@components/BackButton";
import { useWindowSize } from "@hooks/useWindowSize";
import { PlanProps } from "@models/PlansModel";
import { PlanService } from "@services/PlansService";
import { useUserProviderHook } from "@hooks/useUserProviderHook";
import { BREAKPOINTS } from "@constants/breakpoints";
import styles from "./index.module.scss";

const PlansPage = () => {
	const [isPageLoading, setIsPageLoading] = useState(true);
	const [plans, setPlans] = useState<PlanProps[]>([]);
	const { user } = useUserProviderHook();
	const { hasSession = false } = user;
	const { width } = useWindowSize();
	const navigate = useNavigate();

	const isMobile = width < BREAKPOINTS.SM;

	const getPlans = async () => {
		const { list } = (await PlanService.getPlans()) || [];
		setPlans(list);
		setIsPageLoading(false);
	};

	const handleBackButton = () => {
		navigate(-1);
	};

	useEffect(() => {
		if (hasSession) {
			getPlans();
		} else {
			navigate(publicRoutesPath.HomePage);
		}
	}, []);

	if (isPageLoading) {
		return <p>...Cargando</p>;
	}

	return (
		<div>
			<StepsSection />
			<div className="i-container">
				<div className={styles.p_plans__container}>
					{!isMobile && (
						<div className={styles.p_plans__back_button_wrapper}>
							<BackButton theme="blue" label="Volver" onClick={handleBackButton} />
						</div>
					)}
					<MainPlansSection plans={plans} />
				</div>
			</div>
		</div>
	);
};

export default PlansPage;
