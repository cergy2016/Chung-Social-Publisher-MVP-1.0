import './globals.css';
export const metadata = { title: 'Chung Social Publisher', description: 'Create once, adapt everywhere' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
