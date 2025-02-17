import './globals.css';
import localFont from 'next/font/local';
import QueryProvider from './providers/QueryProvider';
import Footer from '@/widgets/Footer';
import BackToTopButton from '@/widgets/BackToTopButton';
import Header from '@/widgets/Header/Header';
import { Toaster } from '@/shared/ui/ui/toaster';

const pretendard = localFont({
  src: '../../public/static/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata = {
  title: 'Big Brother',
  description: '명지대 올인원 플랫폼',
  icons: {
    icon: '/static/mju-tree.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr" className={pretendard.variable}>
      <body className={pretendard.className}>
        <QueryProvider>
          <div className="w-[480px] mx-auto bg-white min-h-full flex flex-col relative">
            <Header />
            <div className="p-8 flex-grow">{children}</div>
            <Toaster />
            <BackToTopButton />
            <Footer />
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
