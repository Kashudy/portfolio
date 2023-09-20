import Image from "next/image";
import { Separator } from "./ui/separator";
import { imageSize } from "./Skills";

export function SkillItem({ image, text }: { image: string; text: string }) {
  return (
    <div className="flex items-center flex-col ">
      <div
        className="relative w-[100px] h-[100px] mb-5" // Set the fixed image size
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image src={image} width={imageSize} alt={`${text} icon`} />
      </div>
      <Separator className="mb-1.5 mt-3 w-2/3" />
      <span>{text}</span>
    </div>
  );
}
