import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

const getService = async (route: string) => {
	try {
		const response = await axios.get(route);
		return response?.data;
	} catch (error) {
		console.log(JSON.stringify(error, null, 2));
	}
};

export const checkServer = async () => {
	return await getService(`${baseUrl}`);
};

export const getDonationsByUser = async () => {
	return await getService(`${baseUrl}`);
};
