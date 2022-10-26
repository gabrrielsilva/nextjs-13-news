import '../styles/globals.css';
import '../styles/Home.module.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      {/* <head></head> */}
      <body>{children}</body>
    </html>
  )
}
