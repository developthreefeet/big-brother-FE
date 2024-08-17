import { useGetTransactionDetail } from '../api/queries';

const useTransactionDetail = (
  organization: string,
  year: number,
  month: number,
) => {
  let affiliation;
  if (organization === 'studentCouncil') {
    affiliation = '총학';
  } else if (organization === 'college') {
    affiliation = '단과대';
  } else if (organization === 'department') {
    affiliation = '학과';
  }

  const queryResult = useGetTransactionDetail(
    affiliation as string,
    year,
    month,
  );
  return queryResult;
};

export default useTransactionDetail;
