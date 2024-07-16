import React from 'react';
import SelectComponent from './SelectComponent';

const OrganizationTitleSelectComponent = () => {
  const organizationItems = ['총학', '단과대', '학과'];
  return (
    <div className="flex flex-col space-y-1">
      <p>구분을 선택해주세요.</p>
      <SelectComponent items={organizationItems} />
    </div>
  );
};

export default OrganizationTitleSelectComponent;
