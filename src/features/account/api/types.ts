export interface VerificationData {
  email: string;
}

export interface GetVerificationResData {
  authResult: boolean;
}

export interface PostEmailCodeResData {
  authResult: boolean;
}

export interface GetEmailCodeVerificationResData {
  authResult: boolean;
}
