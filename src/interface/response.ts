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
	phone: string;
	password?: string;
	confirmPassword?: string;
}
export interface OtpInfo {
	email: string;
	otp: string;
}
