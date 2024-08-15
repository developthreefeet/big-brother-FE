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

export interface CampusNoticeContent {
  createAt: string;
  updateAt: string;
  id: number;
  title: string;
  content: string;
  affiliationId: number;
  files: string[];
}

export interface GetCampusNoticeResData {
  data: {
    totalPages: number;
    totalElements: number;
    size: number;
    content: CampusNoticeContent[];
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
  };
}
