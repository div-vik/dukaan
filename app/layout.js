import "./globals.css";
import Sidebar from "./ui/dashboard/Sidebar";
import Navbar from "./ui/dashboard/Navbar";

export const metadata = {
  title: "Dukaan",
  description: "A dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex">
        <div style={{ flex: "1" }} className="bg-[#1E2640] min-h-screen">
          <Sidebar />
        </div>

        <div style={{ flex: "6" }} className="">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
