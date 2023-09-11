import Image from "next/image";
import PresentationCard from "./_components/presentationCard";
import { ContactForm } from "./_components/ContactForm";

export default function Home() {
  return (
    <div className="mx-8 flex items-center h-screen flex-col">
      {/* <PresentationCard /> */}
      <ContactForm />
    </div>
  );
}
