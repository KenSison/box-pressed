import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import '../../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <Header />
      <Navbar />
      <body>{children}</body>
    </html>
  );
}
