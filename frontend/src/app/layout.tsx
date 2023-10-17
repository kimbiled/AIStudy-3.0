import { type ReactNode } from 'react';
import { type ServerRuntime, type Metadata } from 'next';

import '@assets/styles/default.scss';

export const runtime: ServerRuntime = "nodejs"

export const metadata: Metadata = {
  title: 'AIStudy',
  description: '',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
