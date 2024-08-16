export type DetailItem = GetNoticeDetailResData | GetEventDetailResData;

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
