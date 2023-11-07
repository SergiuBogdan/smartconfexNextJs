import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SmartConfex",
  description:
    "At SmartConfex, we take pride in our track record of delivering top-quality products with unwavering commitment. With numerous successfully completed projects, we bring a wealth of experience to precision machining and parts production. Trust us to consistently deliver high-quality results, as we continue to set industry standards in machining excellence.”",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className={inter.className}>{children}</body>
      </StyledComponentsRegistry>
    </html>
  );
}
