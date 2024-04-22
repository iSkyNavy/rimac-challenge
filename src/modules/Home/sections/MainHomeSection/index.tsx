import FamilyMobileImg from "@assets/images/family-217.png";
import FamilyImg from "@assets/images/family-220.png";

import { useWindowSize } from "src/hooks/useWindowSize";
import { Input } from "@components/Input";
import { ChangeEvent, FormEvent, useState } from "react";
import { Select } from "@components/Select";
import { CheckBox } from "@components/CheckBox";
import { DNIPattern, passportPattern, phonePattern } from "@constants/patterns";
import { noNumberRegex } from "@constants/regex";

import styles from "./index.module.scss";
import { useUserHook } from "@hooks/useUserHook";
import { useNavigate } from "react-router-dom";
import { publicRoutesPath } from "@routes/routes";
import { useUserProviderHook } from "@hooks/useUserProviderHook";

type TDocumentCode = "DNI" | "PSPT";

export const MainHomeSection = () => {
	const [isAcceptPrivacityPolicy, setIsAcceptPrivacityPolicy] = useState(false);
	const [isAcceptCommercialCommunicationPolicy, setIsAcceptCommercialCommunicationPolicy] =
		useState(false);
	const [phoneValue, setPhoneValue] = useState("");
	const [documentTypeValue, setDocumentTypeValue] = useState<TDocumentCode>("DNI");
	const [documentPattern, setDocumentPattern] = useState(DNIPattern);
	const [documentNumberValue, setDocumentNumberValue] = useState("");
	const [isSubmitFormError, setIsSubmitFormError] = useState(false);
	const [isSubmitFormLoading, setIsSubmitFormLoading] = useState(false);
	const { setData } = useUserProviderHook();
	const { width } = useWindowSize();
	const { getUser } = useUserHook();
	const navigate = useNavigate();

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
		const value = e.target.value as TDocumentCode;
		setDocumentTypeValue(value);
		setDocumentNumberValue("");
		if (value === "DNI") setDocumentPattern(DNIPattern);
		else setDocumentPattern(passportPattern);
	};

	const handleOnChangeDocumentNumber = (e: ChangeEvent<HTMLInputElement>) => {
		let value = e.target.value;
		if (value.match(noNumberRegex)) {
			value = value.replace(noNumberRegex, "");
			return setDocumentNumberValue(value);
		}
		if (documentTypeValue === "DNI" && value.length > 8) {
			value = value.slice(0, value.length - 1);
			return setDocumentNumberValue(value);
		}
		if (documentTypeValue === "PSPT" && value.length > 12) {
			value = value.slice(0, value.length - 1);
			return setDocumentNumberValue(value);
		}
		setDocumentNumberValue(value);
	};

	const handleOnChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
		let value = e.target.value;
		if (value.match(noNumberRegex)) {
			value = value.replace(noNumberRegex, "");
			return setPhoneValue(value);
		}
		if (value.length > 9) {
			value = value.slice(0, value.length - 1);
			return setPhoneValue(value);
		}
		setPhoneValue(value);
	};

	const handleCheckedPrivacyPolicy = () => {
		setIsAcceptPrivacityPolicy(prev => !prev);
	};

	const handleCheckedCommercialPolicy = () => {
		setIsAcceptCommercialCommunicationPolicy(prev => !prev);
	};

	const isInValidForm = (): boolean => {
		const isPhoneValueValid = phoneValue.match(phonePattern) ? true : false;
		const isDocumentNumberValueValid = documentNumberValue.match(documentPattern)
			? true
			: false;
		return (
			!isAcceptPrivacityPolicy ||
			!isAcceptCommercialCommunicationPolicy ||
			!isPhoneValueValid ||
			!isDocumentNumberValueValid
		);
	};

	const onSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
		try {
			setIsSubmitFormLoading(true);
			e.preventDefault();
			if (isInValidForm()) return alert("Completa todos los campos");
			console.log("data");
			const user = await getUser();
			const data = {
				...user,
				phone: Number(phoneValue),
				documentType:
					documents.find(document => document.value === documentTypeValue)?.label ?? "",
				documentNumber: documentNumberValue,
			};
			setData(data);
			navigate(publicRoutesPath.PlansPage);
		} catch (error) {
			setIsSubmitFormError(true);
		} finally {
			setIsSubmitFormLoading(false);
		}
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
						<form onSubmit={onSubmitForm}>
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
									pattern={documentPattern}
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
									pattern={phonePattern}
									required
								/>
							</div>
							<div className={styles.s_main_home__form_checkboxes}>
								<div className={styles.s_main_home__form_row_checkbox}>
									<CheckBox
										name="accept-privacy-policy"
										label="Acepto la Política de Privacidad"
										checked={isAcceptPrivacityPolicy}
										onChange={handleCheckedPrivacyPolicy}
										required
									/>
								</div>
								<div className={styles.s_main_home__form_row_checkbox}>
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
							</div>
							<button
								type="submit"
								role="button"
								className={styles.s_main_home__form_button_submit}
								disabled={isInValidForm() || isSubmitFormLoading}
							>
								{isSubmitFormLoading ? "...Cargando" : "Cotiza aquí"}
							</button>
						</form>
						{isSubmitFormError && (
							<div className={styles.s_main_home__form_error}>Error</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};
