import './globals.css';

export const metadata = {
  title: 'Adam Sayyaf Abdulla — IoT Portfolio',
  description: 'A journey through four years of hands-on IoT development — from first Arduino circuits to an award-winning AI-enabled smart system.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
