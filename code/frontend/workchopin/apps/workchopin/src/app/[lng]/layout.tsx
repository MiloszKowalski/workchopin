import '../global.css';
import { dir } from 'i18next';
import { languages } from '@workchopin/workchopin-i18n';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata = {
  title: 'Welcome to workchopin',
  description: 'The symphony of teamwork.',
};

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: {
    lng: (typeof languages)[number];
  };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>{children}</body>
    </html>
  );
}
