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

  //회의록 detail
  const returnProceedingDetailItem = (organization: string, id: number) => {
    if (organization === 'studentCouncil') {
      const { data: studentCouncilData, isSuccess: isSuccessStudentCouncil } =
        useGetProceedingDetail(id);
      if (isSuccessStudentCouncil) {
        return studentCouncilData;
      }
    } else if (organization === 'college') {
      const { data: collegeData, isSuccess: isSuccessCollege } =
        useGetProceedingDetail(id);
      if (isSuccessCollege) {
        return collegeData;
      }
    } else if (organization === 'department') {
      const { data: departmentData, isSuccess: isSuccessDepartment } =
        useGetProceedingDetail(id);
      if (isSuccessDepartment) {
        return departmentData;
      }
    }
  };

  return { returnRuleDetailItem, returnProceedingDetailItem };
};

export default usePdfDetail;
function useGetRuleDetail(id: number): { data: any; isSuccess: any } {
  throw new Error('Function not implemented.');
}

function useGetProceedingDetail(id: number): { data: any; isSuccess: any } {
  throw new Error('Function not implemented.');
}
