import { Inter } from 'next/font/google';
import Bottombar from '../components/shared/Bottombar';
import LeftSidebar from '../components/shared/LeftSidebar';
import RightSidebar from '../components/shared/RightSidebar';
import Topbar from '../components/shared/Topbar';
import '../globals.css';

export const metadata = {
  title: 'Threads clone',
  description: 'A Next.JS Threads app clone',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Topbar />
        <main className="flex flex-row">
          <LeftSidebar />
          <section className="main-container">
            <div className="w-full max-w-4xl">{children}</div>
          </section>
          <RightSidebar />
        </main>
        <Bottombar />
      </body>
    </html>
  );
}
