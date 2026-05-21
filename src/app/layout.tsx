import type { Metadata } from 'next';
import './globals.css';
import WalletProviderWrapper from '../components/WalletProviderWrapper';

export const metadata: Metadata = {
  title: 'ImpactFlow Web',
  description: 'Frontend platform for ImpactFlow community funding and aid distribution.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <WalletProviderWrapper>{children}</WalletProviderWrapper>
      </body>
    </html>
  );
}
