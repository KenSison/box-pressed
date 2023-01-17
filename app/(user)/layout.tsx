import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import '../../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className='max-w-7xl mx-auto'>
        <Header />
        <Navbar />

        {children}
      </body>
    </html>
  );
}
