import {
  FcList,
  FcRules,
  FcDepartment,
  FcCustomerSupport,
  FcCurrencyExchange,
  FcBusinessman,
} from 'react-icons/fc';

export const pages = [
  { icon: FcList, text: '행사', href: '/event' },
  { icon: FcRules, text: '회의록', href: '/proceeding' },
  { icon: FcDepartment, text: '학칙/회칙', href: '/rule' },
  { icon: FcCustomerSupport, text: 'FAQ', href: '/faq' },
  { icon: FcCurrencyExchange, text: '입/출금 내역', href: '/transaction' },
  { icon: FcBusinessman, text: '마이페이지', href: '/mypage' },
];
