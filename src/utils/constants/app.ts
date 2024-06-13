export const URL_BASE = import.meta.env.VITE_URL_BASE;
export const URL_API = import.meta.env.VITE_URL_API || "https://rimac-front-end-challenge.netlify.app/api";
export const DISCOUNT_TO_PLANS = import.meta.env.VITE_DISCOUNT_TO_PLANS || 0.05;

export const QUOTE_OPTIONS = [
    {
        index: 1,
        label: "Planes y coberturas",
    },
    {
        index: 2,
        label: "Resumen",
    }
]

export const DOCUMENTS = [
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
