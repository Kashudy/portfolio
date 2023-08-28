import Image from "next/image";
import PresentationCard from "./_components/presentationCard";
import ContactPanel from "./_components/ContactPanel";

export default function Home() {
  return (
    <div className="mx-8 flex items-center h-screen">
      {/* <PresentationCard /> */}
      <ContactPanel />
    </div>
  );
}
