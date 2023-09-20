import Image from "next/image";
import Csharp from "./_icons/_backend-svgs/csharp.svg";
import Cplusplus from "./_icons/_backend-svgs/cplusplus.svg";
import Dotnet from "./_icons/_backend-svgs/dot-net-core.svg";
import Express from "./_icons/_backend-svgs/express.svg";
import Java from "./_icons/_backend-svgs/java.svg";
import Nodejs from "./_icons/_backend-svgs/nodejs.svg";
import Sql from "./_icons/_backend-svgs/sql-database.svg";

const width: number = 100;

export default function Skills() {
  return (
    <section id="skills">
      <div className="flex items-center flex-wrap gap-10 py-10 bg-gray-400 w-full">
        <Image src={Csharp} width={width} alt="CSharp icon" />
        <Image src={Cplusplus} width={width} alt="C++ icon" />
        <Image src={Dotnet} width={width} alt="Dotnet icon" />
        <Image src={Express} width={width} alt="Express icon" />
        <Image src={Java} width={width} alt="Java icon" />
        <Image src={Nodejs} width={width} alt="Nodejs icon" />
        <Image src={Sql} width={width} alt="Sql icon" />
      </div>
    </section>
  );
}
