import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'CLEARLY Efficient - Sustainable HVAC Solutions',
  description:
    'CLEARLY efficient is a forward-thinking consultancy firm committed to advancing sustainability, climate strategy, and energy efficiency in Berlin, Germany.',
};

export default function RootLayout(props) {
  const { children } = props;

  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}