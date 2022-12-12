/**
 * An interface representing SignInRequest.
 */

export interface BaseResponse  {
    statusCode: number,
    message: string,
    data : {}
 }
export interface SignInRequest {
    phoneNumber: string;
    countryCode: string;
    hashCode: string;
}

export interface SignInResponse {
    accessToken: string;
    refreshToken: string;
}

export interface UserRegistrationRequest {
  countryCode: string;
  mobileNo: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  dob: string;
  created?: Date;
  lastUpdated?: Date;
  accountLocked?: boolean;
  accountActive?: boolean;
  minor?: boolean;
  gender: string;
  mpin?: string;
  emailId?: string;
  married?: boolean;
  profileId?: string;
}

export interface VerifyOTPRequest {
    phoneNumber:string,
    otp: string,
}

export interface PortfolioListGetRequest {
    phoneNumber?:string,
    name?:string,
    type?: string,
    pageNumber?: number
}

export interface TransactionGetRequest {
    phoneNumber?:string,
    selectedItem?:string,
    pageNumber?: number
}