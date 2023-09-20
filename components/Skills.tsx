import Image from "next/image";
import Csharp from "./_icons/csharp.svg";

export default function Skills() {
  return (
    <section className="flex justify-center items-center" id="skills">
      <Image src={Csharp} width={100} alt="CSharp icon" />
    </section>
  );
}
