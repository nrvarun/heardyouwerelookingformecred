import Footer from "./components/Footer";
import Header from "./components/Header";

import "../styles/index.scss";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heard you were looking for me CRED mafia",
  description:
    "How are you front-end mafia, heard you were looking for me, how are you folks. What all do i gotta do to be part of this rockstars.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://gists.rawgit.com/mfd/09b70eb47474836f25a21660282ce0fd/raw/e06a670afcb2b861ed2ac4a1ef752d062ef6b46b/Gilroy.css"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
