import ListLayoutComponent from '@/views/ListLayoutComponent';
import React from 'react';

const page = () => {
  const ruleItems = [
    {
      rule_title: '학칙1',
      create_at: '2024-07-01T12:00:00Z',
      rule_id: 'rule1',
    },
    {
      rule_title: '학칙2',
      create_at: '2024-07-01T12:00:00Z',
      rule_id: 'rule2',
    },
    {
      rule_title: '학칙3',
      create_at: '2024-07-01T12:00:00Z',
      rule_id: 'rule3',
    },
    {
      rule_title: '학칙4',
      create_at: '2024-07-01T12:00:00Z',
      rule_id: 'rule4',
    },
    {
      rule_title: '학칙5',
      create_at: '2024-07-01T12:00:00Z',
      rule_id: 'rule5',
    },
    {
      rule_title: '학칙6',
      create_at: '2024-07-01T12:00:00Z',
      rule_id: 'rule6',
    },
    {
      rule_title: '학칙7',
      create_at: '2024-07-01T12:00:00Z',
      rule_id: 'rule7',
    },
    {
      rule_title: '학칙8',
      create_at: '2024-07-01T12:00:00Z',
      rule_id: 'rule8',
    },
    {
      rule_title: '학칙9',
      create_at: '2024-07-01T12:00:00Z',
      rule_id: 'rule9',
    },
    {
      rule_title: '학칙10',
      create_at: '2024-07-01T12:00:00Z',
      rule_id: 'rule10',
    },
  ];

  return <ListLayoutComponent items={ruleItems} title="학칙/회칙" />;
};

export default page;
