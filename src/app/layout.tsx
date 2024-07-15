import './globals.css';
import localFont from 'next/font/local';
import QueryProvider from './providers/QueryProvider';

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
  return (
    <html lang="kr" className={pretendard.variable}>
      <body className={pretendard.className}>
        <QueryProvider>
          <div className="w-96 mx-auto bg-white min-h-full">{children}</div>
        </QueryProvider>
      </body>
    </html>
  );
}
