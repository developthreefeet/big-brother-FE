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
  password: string;
  college: string;
  affiliation: string;
}

export interface PostJoinResData {
  id: number;
  memberName: string;
  email: string;
  create_at: string;
  college: string;
  affiliation: string;
}

export interface PostLoginProps {
  memberEmail: string;
  memberPass: string;
}

export interface PostLoginResData {
  data: {
    grantType: string;
    accessToken: string;
    refreshToken: string;
  };
}

export interface GetProfileResData {
  data: {
    memberName: string;
    email: string;
    createAt: string;
    updateAt: string;
    affiliationListDto: {
      affiliationTypeList: Array<{
        councilType: string;
        role: string;
        affiliationCode: string;
      }>;
      memberName: string;
    };
  };
}

export interface GetRefreshResData {
  accessToken: string;
  refreshToken: string;
}

export interface PatchChangePwProps {
  email: string;
  password: string;
}

export interface PatchProfileResData {
  data: {
    memberName: string;
    email: string;
    createAt: string;
    updateAt: string;
    affiliationListDto: {
      affiliationTypeList: Array<{
        councilType: string;
        role: string;
        affiliationCode: string;
      }>;
      memberName: string;
    };
  };
}
