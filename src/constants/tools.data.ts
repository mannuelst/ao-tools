export type DataProps = {
	title: string;
	description: string;
	category?: string;
	link: string;
	status: "pending" | "completed" | "in-progress";
};

export const category = {
	validador: "validador",
	geografia: "geografia",
};

export const data: DataProps[] = [
	{
		title: "Validar telefone ☎️",
		description:
			"Validar o número de telefone se é de Angola e a qual operadora pertence.",
		category: category.validador,
		link: "/validador/telefone",
		status: "completed",
	},
	{
		title: "Validar passaporte 🛂",
		description:
			"Validar o número de passaporte se é válido e é angolano.",
		category: category.validador,
		link: "/validador/passaporte",
		status: "completed",
	},
	{
		title: "Validar bilhete de identidade 🪪",
		description:
			"Validar o número de bilhete de identidade nacional.",
		category: category.validador,
		link: "/validador/bi",
		status: "completed",
	},
	{
		title: "Províncias de Angola 🇦🇴",
		description: "Ver a lista de províncias de Angola.",
		category: category.geografia,
		link: "/geografia/provincias",
		status: "completed",
	},
	{
		title: "Munícipios das províncias de Angola 🇦🇴",
		description:
			"Ver a lista de munícipios das províncias de Angola.",
		category: category.geografia,
		link: "/geografia/municipios",
		status: "completed",
	},
];
