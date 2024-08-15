import { useGetCollege } from '../api/queries';

export const useOrganizationList = () => {
  const { data: collegeData, isLoading } = useGetCollege();

  const collegeNameList = collegeData?.data.map((v) => v.councilName);

  return { collegeNameList, isLoading };
};
