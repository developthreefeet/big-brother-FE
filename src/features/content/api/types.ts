export type CommonDetailItem = GetNoticeDetailResData | GetEventDetailResData;
export type PdfDetailItem = GetRuleDetailResData | GetProceedingDetailResData;

/** 상세조회 관련 file */
interface DetailFileInfo {
  fileName: string;
  url: string;
}

/**공지사항 detail */
export interface GetNoticeDetailResData {
  noticeId: number;
  title: string;
  content: string;
  type: string;
  fileInfo: DetailFileInfo[];
  createAt: string;
  updateAt: string;
}

/** 이벤트 detail */
export interface GetEventDetailResData {
  eventId: number;
  title: string;
  content: string;
  type: string;
  fileInfo: DetailFileInfo[];
  createAt: string;
  updateAt: string;
}

/** 학칙/회칙 detail */
export interface GetRuleDetailResData {
  ruleId: number;
  title: string;
  createAt: string;
  updateAt: string;
  affiliationId: number;
  fileInfo: DetailFileInfo[];
}

/** 회의록 detail */
export interface GetProceedingDetailResData {
  proceedingId: number;
  title: string;
  createAt: string;
  updateAt: string;
  affiliationId: number;
  fileInfo: DetailFileInfo[];
}
