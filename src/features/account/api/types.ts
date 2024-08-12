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

export interface PostJoinProps {
  username: string;
  email: string;
  create_at?: string;
  update_at?: string;
  role?: string;
  is_active?: string;
  password: string;
  affiliation: string;
}

export interface PostJoinResData {
  id: number;
  memberName: string;
  email: string;
  create_at: string;
  update_at: string;
  roles: string[];
  password: string;
}
