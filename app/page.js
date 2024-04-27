import Image from "next/image";
import ProductLayout from "@/components/Product/productLayout";
import Contact from "@/components/Contacts/contacts"
import SectionDivider from "@/components/section-divider"
import About from "@/components/About/about"
import Entry from "@/components/entry";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Entry></Entry>
      <SectionDivider></SectionDivider>
      <About></About>
      <SectionDivider></SectionDivider>
      <ProductLayout></ProductLayout>
      <SectionDivider></SectionDivider>
      <Contact></Contact>
    </main>
  );
}
