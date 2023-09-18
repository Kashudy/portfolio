import Image from "next/image";
import { ContactForm } from "../components/ContactForm";

export default function Home() {
  return (
    <div className="mx-8 flex items-center h-screen flex-col">
      {/* <PresentationCard /> */}
      <ContactForm />
    </div>
  );
}
