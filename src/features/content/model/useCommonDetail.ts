import { useGetFaq } from '@/features/contentList/api/queries';
import {
  useGetCampusNoticeDetail,
  useGetNoticeDetail,
  useGetEventDetail,
} from '../api/queries';

const useCommonDetail = () => {
  const returnNoticeDetailItem = (organization: string, id: number) => {
    let data;
    let isLoading = true;

    if (organization === 'general' || organization === 'academic') {
      const response = useGetCampusNoticeDetail(id);
      data = response.data;
      isLoading = response.isLoading;
    } else {
      const response = useGetNoticeDetail(id);
      data = response.data;
      isLoading = response.isLoading;
    }

    return { data, isLoading };
  };

  // 행사 detail
  const returnEventDetailItem = (id: number) => {
    let data;
    let isLoading = true;

    const response = useGetEventDetail(id);
    data = response.data;
    isLoading = response.isLoading;

    return { data, isLoading };
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
