import { useGetFaq } from '@/features/contentList/api/queries';
import {
  useGetCampusNoticeDetail,
  useGetNoticeDetail,
  useGetEventDetail,
} from '../api/queries';

const useCommonDetail = () => {
  //공지사항 detail
  const returnNoticeDetailItem = (organization: string, id: number) => {
    if (organization === 'general') {
      const { data: generalData, isSuccess: isSuccessGeneral } =
        useGetCampusNoticeDetail(id);
      if (isSuccessGeneral) {
        return generalData;
      }
    } else if (organization === 'studentCouncil') {
      const { data: studentCouncilData, isSuccess: isSuccessStudentCouncil } =
        useGetNoticeDetail(id);
      if (isSuccessStudentCouncil) {
        return studentCouncilData;
      }
    } else if (organization === 'college') {
      const { data: collegeData, isSuccess: isSuccessCollege } =
        useGetNoticeDetail(id);
      if (isSuccessCollege) {
        return collegeData;
      }
    } else if (organization === 'department') {
      const { data: departmentData, isSuccess: isSuccessDepartment } =
        useGetNoticeDetail(id);
      if (isSuccessDepartment) {
        return departmentData;
      }
    }
  };

  //행사 detail
  const returnEventDetailItem = (organization: string, id: number) => {
    if (organization === 'studentCouncil') {
      const { data: studentCouncilData, isSuccess: isSuccessStudentCouncil } =
        useGetEventDetail(id);
      if (isSuccessStudentCouncil) {
        return studentCouncilData;
      }
    } else if (organization === 'college') {
      const { data: collegeData, isSuccess: isSuccessCollege } =
        useGetEventDetail(id);
      if (isSuccessCollege) {
        return collegeData;
      }
    } else if (organization === 'department') {
      const { data: departmentData, isSuccess: isSuccessDepartment } =
        useGetEventDetail(id);
      if (isSuccessDepartment) {
        return departmentData;
      }
    }
  };

  //faq detail
  const getFaq = (organization: string) => {
    if (organization === 'studentCouncil') {
      return useGetFaq('총학');
    } else if (organization === 'college') {
      return useGetFaq('단과대');
    } else if (organization === 'department') {
      return useGetFaq('학과');
    }
    return { data: undefined, isLoading: false };
  };

  const returnFaqDetailItem = (organization: string) => {
    const { data, isLoading } = getFaq(organization);
    return { data, isLoading };
  };

  return { returnNoticeDetailItem, returnEventDetailItem, returnFaqDetailItem };
};

export default useCommonDetail;
