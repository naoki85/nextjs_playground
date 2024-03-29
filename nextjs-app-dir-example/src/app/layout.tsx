import Provider from "./Provider";
import Header from "@/app/Header";
import Main from "@/app/Main";
import Footer from "@/app/Footer";

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  themeColor: "#ffffff",
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
    <head/>
    <body>
    <Provider>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </Provider>
    </body>
    </html>
  );
}
