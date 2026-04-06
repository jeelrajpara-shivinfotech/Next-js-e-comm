import { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about E-comm and our mission.",
  openGraph: {
    url: "https://next-js-e-comm.vercel.app/about",
  },
};

export default function About() {
  return <AboutPage />;
}
