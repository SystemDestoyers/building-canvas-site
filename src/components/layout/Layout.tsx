
import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
  noNavbar?: boolean;
  noFooter?: boolean;
}

export function Layout({ children, noNavbar = false, noFooter = false }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {!noNavbar && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!noFooter && <Footer />}
    </div>
  );
}
