import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function PresentationCard() {
  return (
    <section id="about">
      {/* <div className="flex p-3 gap-8 px-[15rem]">
        <div className=" flex flex-col">
          <h1 className="text-[4rem] ">About me</h1>

          <div className="flex flex-col justify-center h-3/5">
            <p className=" ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              voluptates dolorem, deleniti maiores cum dolorum, dignissimos
              distinctio ea voluptatibus perferendis blanditiis natus eligendi
              hic quidem. Provident in labore fugit velit.
            </p>
          </div>
        </div>

        <Image
          className="w-2/5"
          src="/profile.jpg"
          alt="Profile picture"
          width={400}
          height={300}
        />
      </div> */}
      <div className="flex flex-col items-center justify-center h-screen w-[500px]">
        <div className=" my-7">
          <h1 className="text-4xl font-bold text-center pt-6">About me</h1>
          <h2 className=" text-lg text-accent-foreground pt-1">
            Get to know more about me
          </h2>
        </div>
        <Avatar className=" w-[200px] h-[200px]">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="Profile picture"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className=" py-7">
          Currently searching for my first work experience in the IT area.
          Bachelor of Systems student at ORT University, halfway through degree
          completion. Passionate about employing new and dynamic technologies.
          Strong sense of responsibility and avid teamwork player, motivated to
          learn new skills and hone my current ones.
        </p>
      </div>
    </section>
  );
}
