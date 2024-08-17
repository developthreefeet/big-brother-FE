import { useGetTransactionDetail } from '../api/queries';

const useTransactionDetail = () => {
  const returnTransactionDetailItem = (
    organization: string,
    year: number,
    month: number,
  ) => {
    if (organization === 'studentCouncil') {
      const { data: studentCouncilData, isSuccess: isSuccessStudentCouncil } =
        useGetTransactionDetail('총학', year, month);
      if (isSuccessStudentCouncil) {
        return studentCouncilData;
      }
    } else if (organization === 'college') {
      const { data: collegeData, isSuccess: isSuccessCollege } =
        useGetTransactionDetail('단과대', year, month);
      if (isSuccessCollege) {
        return collegeData;
      }
    } else if (organization === 'department') {
      const { data: departmentData, isSuccess: isSuccessDepartment } =
        useGetTransactionDetail('학과', year, month);
      if (isSuccessDepartment) {
        return departmentData;
      }
    }
  };
  return { returnTransactionDetailItem };
};

export default useTransactionDetail;
