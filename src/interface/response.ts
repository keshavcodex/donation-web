export interface Response {
	errorMessage: string;
	success: boolean;
	user: any;
}
export interface LoginInfo {
	email: string;
	password: string;
}
export interface UserInfo {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	confirmPassword: string;
	phone: string;
}
export interface OtpInfo {
	email: string;
	otp: string;
}
