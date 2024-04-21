import { FC, useEffect, useState } from "react";
import { Option, RadioCard } from "@components/RadioCard";
import UserProtectionIcon from "@assets/icons/user-protection.svg";
import UserProtectionPlusIcon from "@assets/icons/user-protection-plus.svg";
import HospitalLightIcon from "@assets/icons/hospital-light.svg";
import HomeLightIcon from "@assets/icons/home-light.svg";
import { PlanProps } from "@models/PlansModel";
import { CardPlanComponent } from "../../components/CardPlanComponent";
import { useUserProviderHook } from "@hooks/useUserProviderHook";

import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { publicRoutesPath } from "@routes/routes";

interface Pops {
	plans: PlanProps[];
}

const OptionsId = {
	FOR_ME: "para_mi",
	FOR_OTHER: "para_otro",
	NONE: "",
};

const discount = 0.05;

export const MainPlansSection: FC<Pops> = ({ plans }) => {
	const planOptions = [
		{
			id: OptionsId.FOR_ME,
			title: "Para mi",
			description: "Cotiza tu seguro de salud y agrega familiares si así lo deseas.",
			Icon: <UserProtectionIcon />,
		},
		{
			id: OptionsId.FOR_OTHER,
			title: "Para alguien más",
			description: "Realiza una cotización para uno de tus familiares o cualquier persona.",
			Icon: <UserProtectionPlusIcon />,
		},
	];
	const [plansState, setPlansState] = useState(plans);
	const [plansFiltered, setPlansFiltered] = useState<PlanProps[]>([]);
	const [optionSelectionId, setoptionSelectionId] = useState(OptionsId.NONE);

	const { user } = useUserProviderHook();
	const { age: ageUser } = user;

	const navigate = useNavigate();

	const filterPlans = (optionId: string) => {
		if (!ageUser) return;
		const filteredPlans = [];
		for (const plan of plansState) {
			if (ageUser! <= plan.age) {
				if (OptionsId.FOR_OTHER != optionId) filteredPlans.push(plan);
				else filteredPlans.push({ ...plan, price: plan.price - plan.price * discount });
			}
		}
		setPlansFiltered(filteredPlans);
	};
	const onRadioCardChange = async (option: Option) => {
		setoptionSelectionId(option.id as string);
		filterPlans(option.id as string);
	};

	const getIcon = (title: string) => {
		const isClinic = title.includes("Clínica");
		if (isClinic) return <HospitalLightIcon />;
		return <HomeLightIcon />;
	};

	const handleSelectPlan = (plan: PlanProps) => {
		console.log(plan);
		navigate(publicRoutesPath.ResumePage);
	};

	useEffect(() => {
		setPlansState(plans);
	}, [plans]);
	return (
		<div className={styles.s_main_plans}>
			<h3 className={styles.s_main_plans__title}>Rocío ¿Para quién deseas cotizar?</h3>
			<p className={styles.s_main_plans__description}>
				Selecciona la opción que se ajuste más a tus necesidades.
			</p>
			<div className={styles.s_main_plans__options}>
				<RadioCard
					options={planOptions}
					className={styles.s_main_plans__radio_card}
					classNameItem={styles.s_main_plans__radio_card_item}
					onChange={onRadioCardChange}
				/>
			</div>
			{optionSelectionId && plansFiltered.length > 0 && (
				<div className={styles.s_main_plans__result}>
					{plansFiltered.map((_plan, index) => (
						<CardPlanComponent
							key={index}
							title={_plan.name}
							description={_plan.description}
							id={index}
							price={_plan.price}
							onClick={() => handleSelectPlan(_plan)}
							Icon={getIcon(_plan.name)}
						/>
					))}
				</div>
			)}
		</div>
	);
};
