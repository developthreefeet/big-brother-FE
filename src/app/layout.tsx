import './globals.css';
import localFont from 'next/font/local';
import QueryProvider from './providers/QueryProvider';
import MainHeader from '@/widgets/Header/MainHeader';
import Footer from '@/widgets/Footer';
import CommonHeader from '@/widgets/Header/CommonHeader';
import { headers } from 'next/headers';

const pretendard = localFont({
  src: '../../public/static/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata = {
  title: 'Big Brother',
  description: '명지대 올인원 플랫폼',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const pathname = headersList.get('x-pathname');
  console.log(pathname);

  return (
    <html lang="kr" className={pretendard.variable}>
      <body className={pretendard.className}>
        <QueryProvider>
          <div className="w-96 mx-auto bg-white min-h-full flex flex-col">
            {pathname === '/main' ? (
              <MainHeader />
            ) : pathname === '/signIn' ? (
              ''
            ) : (
              <CommonHeader />
            )}
            <div className="p-5 flex-grow">{children}</div>
            <Footer />
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
