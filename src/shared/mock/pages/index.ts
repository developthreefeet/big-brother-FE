import {
  FcList,
  FcRules,
  FcDepartment,
  FcCustomerSupport,
  FcCurrencyExchange,
  FcBusinessman,
} from 'react-icons/fc';

export const pages = [
  { icon: FcList, text: '행사', href: '/event/studentCouncil' },
  { icon: FcRules, text: '회의록', href: '/proceeding/studentCouncil' },
  { icon: FcDepartment, text: '학칙/회칙', href: '/rule/studentCouncil' },
  { icon: FcCustomerSupport, text: 'FAQ', href: '/faq/studentCouncil' },
  { icon: FcCurrencyExchange, text: '입/출금 내역', href: '/transaction' },
  { icon: FcBusinessman, text: '마이페이지', href: '/mypage' },
];
