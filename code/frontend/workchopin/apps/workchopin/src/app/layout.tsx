import './global.css';

export const metadata = {
  title: 'Welcome to workchopin',
  description: 'The symphony of teamwork.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
