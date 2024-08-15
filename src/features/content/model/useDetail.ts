'use client';

import {
  useGetCampusNoticeDetail,
  useGetNoticeDetail,
} from '@/features/contentList/api/queries';

const useDetail = () => {
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
    } else {
      throw new Error('Invalid organization type');
    }
  };

  return { returnNoticeDetailItem };
};

export default useDetail;
