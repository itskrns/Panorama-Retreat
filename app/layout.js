import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import "./_styles/globals.css";
import { ReservationProvider } from "./_components/ReservationContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "Panorama Retreat | %s",
    default: "Welcome to Panorama Retreat",
  },
  description:
    "Hotel Panorama Retreat combines stunning views, luxurious accommodations, and exceptional service for a relaxing getaway.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col relative
        `}
      >
        <Header />

        <div className="flex-1 py-8 px-8 grid">
          <main className="mx-auto max-w-7xl w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
