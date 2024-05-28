import axios from 'axios';
import { LoginInfo, OtpInfo, UserInfo } from '../interface/response';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const login = async (body: LoginInfo) => {
	try {
		const response: any = await axios.post(`${baseUrl}/login`, body);
		return response?.data;
	} catch (error: any) {
		console.log('err\n\n', JSON.stringify(error.message));
		return error;
	}
};

export const register = async (body: UserInfo) => {
	try {
		return await axios.post(`${baseUrl}/signup`, body);
	} catch (error) {
		return error;
	}
};

export const otpVerify = async (body: OtpInfo) => {
	try {
		return await axios.post(`${baseUrl}/validate-signup`, body);
	} catch (error) {
		return error;
	}
};

export const editUser = async (id: string, body: UserInfo) => {
	try {
		const res = await axios.put(`${baseUrl}/editUser/${id}`, body);
		return res?.data;
	} catch (error) {
		return error;
	}
};
