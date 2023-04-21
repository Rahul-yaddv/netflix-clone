import background from "../public/background.png";
import Image from "next/image";
export default function SignIn() {
  return (
    <div>
      <div>
        <Image src={background} alt="hi" className="w-full h-full"></Image>;
      </div>
      <div></div>
    </div>
  );
}
