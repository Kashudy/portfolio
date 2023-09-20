import Csharp from "./_icons/_backend-svgs/csharp.svg";
import Cplusplus from "./_icons/_backend-svgs/cplusplus.svg";
import Dotnet from "./_icons/_backend-svgs/dot-net-core.svg";
import Express from "./_icons/_backend-svgs/express.svg";
import Java from "./_icons/_backend-svgs/java.svg";
import Nodejs from "./_icons/_backend-svgs/nodejs.svg";
import Sql from "./_icons/_backend-svgs/sql-database.svg";
import { SkillItem } from "./SkillItem";

export const imageSize: number = 80;

export default function Skills() {
  return (
    <section id="skills">
      <h1 className="text-4xl font-bold text-center pt-6">Skills</h1>
      <div className="flex items-center flex-wrap gap-10 py-10 w-full justify-center">
        <SkillItem image={Csharp} text="C#" />
        <SkillItem image={Cplusplus} text="C++" />
        <SkillItem image={Dotnet} text=".NET" />
        <SkillItem image={Express} text="Express.js" />
        <SkillItem image={Java} text="Java" />
        <SkillItem image={Nodejs} text="Node.js" />
        <SkillItem image={Sql} text="SQL Databases" />
      </div>
    </section>
  );
}
