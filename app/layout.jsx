import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';

export const metadata = {
  title: 'Title',
  description: 'My portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
