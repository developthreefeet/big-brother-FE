import { useGetRuleDetail, useGetProceedingDetail } from '../api/queries';

const usePdfDetail = () => {
  // 회칙/학칙 detail
  const returnRuleDetailItem = (id: number) => {
    const { data, isLoading } = useGetRuleDetail(id);
    return { data, isLoading };
  };

  // 회의록 detail
  const returnProceedingDetailItem = (id: number) => {
    const { data, isLoading } = useGetProceedingDetail(id);
    return { data, isLoading };
  };

  return { returnRuleDetailItem, returnProceedingDetailItem };
};

export default usePdfDetail;
