import Csharp from "@/components/_icons/_backend-svgs/csharp.svg";
import Cplusplus from "@/components/_icons/_backend-svgs/cplusplus.svg";
import Dotnet from "@/components/_icons/_backend-svgs/dot-net-core.svg";
import Express from "@/components/_icons/_backend-svgs/express.svg";
import Java from "@/components/_icons/_backend-svgs/java.svg";
import Nodejs from "@/components/_icons/_backend-svgs/nodejs.svg";
import Sql from "@/components/_icons/_backend-svgs/sql-database.svg";
import Css from "@/components/_icons/_frontend-svgs/css.svg";
import Html from "@/components/_icons/_frontend-svgs/html.svg";
import Javascript from "@/components/_icons/_frontend-svgs/javascript.svg";
import Reacticon from "@/components/_icons/_frontend-svgs/react.svg";
import Tailwind from "@/components/_icons/_frontend-svgs/tailwind-css.svg";
import Typescript from "@/components/_icons/_frontend-svgs/typescript.svg";
import Nextjs from "@/components/_icons/_frontend-svgs/next-js.svg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SkillItem } from "./SkillItem";

export default function Skills() {
  return (
    <section id="skills">
      <h1 className="text-4xl font-bold text-center pt-6">Skills</h1>
      <div className=" flex justify-center">
        <Tabs defaultValue="frontend" className=" w-[800px] mt-5">
          <TabsList className="justify-center flex ">
            <TabsTrigger value="frontend" className="w-1/3">
              Frontend
            </TabsTrigger>
            <TabsTrigger value="backend" className="w-1/3">
              Backend
            </TabsTrigger>
          </TabsList>
          <TabsContent value="frontend">
            <div className="flex items-center flex-wrap gap-10 py-10 w-full justify-center">
              <SkillItem image={Css} text="CSS" />
              <SkillItem image={Html} text="HTML" />
              <SkillItem image={Javascript} text="JavaScript" />
              <SkillItem image={Reacticon} text="React" />
              <SkillItem image={Tailwind} text="Tailwind CSS" />
              <SkillItem image={Typescript} text="TypeScript" />
              <SkillItem image={Nextjs} text="Next.js" />
            </div>
          </TabsContent>
          <TabsContent value="backend">
            <div className="flex items-center flex-wrap gap-10 py-10 w-full justify-center">
              <SkillItem image={Csharp} text="C#" />
              <SkillItem image={Cplusplus} text="C++" />
              <SkillItem image={Dotnet} text=".NET" />
              <SkillItem image={Express} text="Express.js" />
              <SkillItem image={Java} text="Java" />
              <SkillItem image={Nodejs} text="Node.js" />
              <SkillItem image={Sql} text="SQL Databases" />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
