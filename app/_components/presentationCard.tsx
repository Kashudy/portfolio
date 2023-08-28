import Image from "next/image";

export default function PresentationCard() {
  return (
    <div className="flex p-3 gap-8">
      <div className=" flex flex-col">
        <h1 className="text-[4rem] ">About me</h1>

        <div className="flex flex-col justify-center h-3/5">
          <p className=" ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
            voluptates dolorem, deleniti maiores cum dolorum, dignissimos
            distinctio ea voluptatibus perferendis blanditiis natus eligendi hic
            quidem. Provident in labore fugit velit.
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
    </div>
  );
}
