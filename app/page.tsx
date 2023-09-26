import Skills from "@/components/_costum/Skills";
import ContactForm from "@/components/_costum/ContactForm";
import PresentationCard from "@/components/_costum/presentationCard";

export default function Home() {
  return (
    <div className=" flex items-center h-screen flex-col">
      <PresentationCard />
      <Skills />
      <ContactForm />
    </div>
  );
}
