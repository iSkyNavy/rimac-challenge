import FamilyMobileImg from "@assets/images/family-217.png";
import FamilyImg from "@assets/images/family-220.png";

import { useWindowSize } from "src/hooks/useWindowSize";
import styles from "./index.module.scss";
import { Input } from "@components/Input";
import { ChangeEvent, useState } from "react";
import { Select } from "@components/Select";
import { CheckBox } from "@components/CheckBox";

export const MainHomeSection = () => {
	const [isAcceptPrivacityPolicy, setIsAcceptPrivacityPolicy] = useState(false);
	const [isAcceptCommercialCommunicationPolicy, setIsAcceptCommercialCommunicationPolicy] =
		useState(false);
	const [phoneValue, setPhoneValue] = useState("");
	const [documentTypeValue, setDocumentTypeValue] = useState("DNI");
	const [documentNumberValue, setDocumentNumberValue] = useState("");

	const { width } = useWindowSize();

	const isMobile = width < 768;

	const documents = [
		{
			value: "DNI",
			label: "DNI",
			enabled: true,
		},
		{
			value: "PSPT",
			label: "Pasaporte",
			enabled: true,
		},
	];

	const handleOnChangeDocumentType = (e: ChangeEvent<HTMLSelectElement>) => {
		console.log(e.target.value);
		const value = e.target.value;
		setDocumentTypeValue(value);
		const element = document.getElementById("document_number")! as HTMLInputElement;
		setDocumentNumberValue("");
		element.value = "";
	};

	const handleOnChangeDocumentNumber = (e: ChangeEvent<HTMLInputElement>) => {
		let value = e.target.value;
		value = value.replace(/\D/g, "");
		const element = document.getElementById("document_number")! as HTMLInputElement;
		element.value = value;
		if (documentTypeValue === "DNI" && value.length > 8) {
			value = value.slice(0, value.length - 1);
			setDocumentNumberValue(value);
			element.value = value;
		}
		if (documentTypeValue === "PSPT" && value.length > 12) {
			value = value.slice(0, value.length - 1);
			setDocumentNumberValue(value);
			element.value = value;
		}
		setDocumentNumberValue(value);
	};

	const handleOnChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
		const element = document.getElementById("phone")! as HTMLInputElement;
		let value = e.target.value;
		value = value.replace(/\D/, "");
		element.value = value;
		if (value.length > 9) {
			value = value.slice(0, value.length - 1);
			element.value = value;
			setPhoneValue(value);
		}
	};

	const handleCheckedPrivacyPolicy = () => {
		setIsAcceptPrivacityPolicy(prev => !prev);
	};

	const handleCheckedCommercialPolicy = () => {
		setIsAcceptCommercialCommunicationPolicy(prev => !prev);
	};

	const isInValidForm = (): boolean => {
		return (
			!isAcceptPrivacityPolicy ||
			!isAcceptCommercialCommunicationPolicy ||
			phoneValue.length === 0 ||
			documentNumberValue.length === 0 ||
			documentTypeValue.length === 0
		);
	};

	return (
		<section className={`${styles.s_main_home} i-container`}>
			{!isMobile && (
				<div className={styles.s_main_home__family_img_wrapper}>
					<picture className={styles.s_main_home__family_img}>
						<img src={FamilyImg} alt="family-img" />
					</picture>
				</div>
			)}
			<div className={styles.s_main_home__right}>
				<div className={styles.s_main_home__right_wrapper}>
					<div className={styles.s_main_home__presentation}>
						<div className={styles.s_main_home__presentation_description}>
							<div className={styles.s_main_home__presentation_badge}>
								<span>Seguro Salud Flexible</span>
							</div>
							<h4 className={styles.s_main_home__presentation_title}>
								Creando para ti y tu familia
							</h4>
						</div>
						<picture className={styles.s_main_home__presentation_img}>
							<img src={FamilyMobileImg} alt="family-img-mobile" />
						</picture>
					</div>
					<hr className={styles.s_main_home__separator} />
					<p className={styles.s_main_home__presentation_text}>
						Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría,
						100% online.
					</p>
					<div className={styles.s_main_home__form}>
						<form action="">
							<div className={styles.s_main_home__form_row}>
								<Select
									options={documents}
									value={documentTypeValue}
									onChange={handleOnChangeDocumentType}
									borderRadius="left"
									className={styles.s_main_home__form_select}
									name="document_type"
									id="document_type"
									required
								/>
								<Input
									label="Nro. de documento"
									value={documentNumberValue}
									onChange={handleOnChangeDocumentNumber}
									type="text"
									borderRadius="right"
									name="document_number"
									id="document_number"
									required
								/>
							</div>
							<div className={styles.s_main_home__form_row}>
								<Input
									label="Celular"
									value={phoneValue}
									onChange={handleOnChangePhone}
									type="text"
									borderRadius="full"
									name="phone"
									id="phone"
									required
								/>
							</div>
							<br />
							<div className={styles.s_main_home__form_row}>
								<CheckBox
									name="accept-privacy-policy"
									label="Acepto la Política de Privacidad"
									checked={isAcceptPrivacityPolicy}
									onChange={handleCheckedPrivacyPolicy}
									required
								/>
							</div>
							<div className={styles.s_main_home__form_row}>
								<CheckBox
									name="accept-commercial-communications"
									label="Acepto la Política Comunicaciones Comerciales"
									checked={isAcceptCommercialCommunicationPolicy}
									onChange={handleCheckedCommercialPolicy}
									required
								/>
							</div>
							<a className={styles.s_main_home__form_apply_terms}>
								Aplican Términos y Condiciones.
							</a>
							<button
								type="submit"
								className={styles.s_main_home__form_button_submit}
								disabled={isInValidForm()}
							>
								Cotiza aquí
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};
