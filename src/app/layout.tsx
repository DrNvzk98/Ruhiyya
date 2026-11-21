import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ruhiyya - Undangan Digital',
  description: 'Undangan Pernikahan Digital Elegan',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
