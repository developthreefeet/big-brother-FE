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

export interface NoticeContent {
  createAt: string;
  updateAt: string;
  id: number;
  title: string;
  content: string;
  affiliationId: number;
  files: string[];
}

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

export interface GetNoticeDetailResData {
  noticeId: number;
  title: string;
  content: string;
  type: string;
  urlList: string[];
  createAt: string;
  updateAt: string;
}

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

export interface GetEventDetailResData {
  eventId: number;
  title: string;
  content: string;
  type: string;
  urlList: string[];
  createAt: string;
  updateAt: string;
}

export type ListLayoutItems = NoticeContent[] | EventContent[] | undefined;
export type ListItems = NoticeContent[] | EventContent[];
export type DetailItem = GetNoticeDetailResData | GetEventDetailResData;
