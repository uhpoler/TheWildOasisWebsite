import Logo from "./_components/Logo";
import Navigation from "./_components/Navigatin";

import "@/app/_styles/globals.css";

export const metadata = {
  title: "The Wild Oasis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
}
