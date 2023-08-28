import Image from "next/image";
import PresentationCard from "./_components/presentationCard";

export default function Home() {
  return (
    <div className="mx-8 flex items-center h-screen">
      <PresentationCard />
    </div>
  );
}
