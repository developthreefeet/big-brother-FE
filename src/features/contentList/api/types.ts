export type ListLayoutItems = NoticeContent[] | EventContent[] | undefined;
export type ListItems = NoticeContent[] | EventContent[];
export type DetailItem = GetNoticeDetailResData | GetEventDetailResData;

/**학과, 대학 get */
export interface GetCollegeResData {
  data: Array<{
    val: number;
    councilName: string;
  }>;
}

export interface GetDepartmentResData {
  data: Array<{
    val: number;
    councilName: string;
  }>;
}

/** 상세조회 관련 file */
interface DetailFileInfo {
  fileName: string;
  url: string;
}

/** 전체조회 관련 file */
interface ListFileInfo {
  fileName: string;
  url: string;
  createAt: string;
  updateAt: string;
  id: number;
  fileType: string;
}

/** 공지사항 content */
export interface NoticeContent {
  createAt: string;
  updateAt: string;
  id: number;
  title: string;
  content: string;
  affiliationId: number;
  files: ListFileInfo[];
}

/**공지사항 전체 조회 */
export interface GetNoticeResData {
  totalPages: number;
  totalElements: number;
  size: number;
  content: NoticeContent[];
  number: number;
  sort: {
    empty: boolean;
    unsorted: boolean;
    sorted: boolean;
  };
  numberOfElements: number;
  pageable: {
    offset: number;
    sort: {
      empty: boolean;
      unsorted: boolean;
      sorted: boolean;
    };
    unpaged: boolean;
    paged: boolean;
    pageNumber: number;
    pageSize: number;
  };
  first: boolean;
  last: boolean;
  empty: boolean;
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

/**이벤트 content */
export interface EventContent {
  createAt: string;
  updateAt: string;
  id: number;
  title: string;
  content: string;
  affiliationId: number;
  target: string;
  startDateTime: string;
  endDateTime: string;
}

/** 이벤트 전체 조회 */
export interface GetEventResData {
  totalPages: number;
  totalElements: number;
  size: number;
  content: EventContent[];
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  pageable: {
    offset: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    paged: boolean;
    pageNumber: number;
    pageSize: number;
    unpaged: boolean;
  };
  first: boolean;
  last: boolean;
  empty: boolean;
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

export interface FaqContent {
  createAt: string;
  updateAt: string;
  id: number;
  title: string;
  content: string;
  affiliationId: number;
  files: ListFileInfo[];
}

export interface GetFaqResData {
  totalPages: number;
  totalElements: number;
  size: number;
  content: FaqContent[];
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  pageable: {
    offset: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    paged: boolean;
    pageNumber: number;
    pageSize: number;
    unpaged: boolean;
  };
  first: boolean;
  last: boolean;
  empty: boolean;
}
