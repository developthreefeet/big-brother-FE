'use client';

import {
  useGetCampusNoticeDetail,
  useGetEventDetail,
  useGetNoticeDetail,
} from '@/features/contentList/api/queries';
import { useRouter } from 'next/navigation';

const useDetail = () => {
  const router = useRouter();
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
    } else {
      throw new Error('Invalid organization type');
    }
  };
  return { returnNoticeDetailItem, returnEventDetailItem };
};

export default useDetail;
