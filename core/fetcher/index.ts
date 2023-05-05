import axios from "axios";

export const axiosBase = axios.create({
	baseURL: "https://tonapi.blockapi.me",
});

export async function fetcher<Type>(url: string) {
	const res = await axiosBase.get<Type>(url);

	console.log("fetcher", res);

	return res.data;
}
