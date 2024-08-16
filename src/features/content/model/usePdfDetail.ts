import { useGetRuleDetail } from '../api/queries';

const usePdfDetail = () => {
  //회칙/학칙 detail
  const returnRuleDetailItem = (organization: string, id: number) => {
    if (organization === 'studentCouncil') {
      const { data: studentCouncilData, isSuccess: isSuccessStudentCouncil } =
        useGetRuleDetail(id);
      if (isSuccessStudentCouncil) {
        return studentCouncilData;
      }
    } else if (organization === 'college') {
      const { data: collegeData, isSuccess: isSuccessCollege } =
        useGetRuleDetail(id);
      if (isSuccessCollege) {
        return collegeData;
      }
    } else if (organization === 'department') {
      const { data: departmentData, isSuccess: isSuccessDepartment } =
        useGetRuleDetail(id);
      if (isSuccessDepartment) {
        return departmentData;
      }
    }
  };

  return { returnRuleDetailItem };
};

export default usePdfDetail;
