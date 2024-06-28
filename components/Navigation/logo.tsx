import Image from "next/image";
export default function Logo() {
  return (
    <div className="flex justify-center items-center">
      <Image
        src="/logooo.png"
        alt="Bernzz Logo"
        width={250}
        height={250}
        priority
        className="object-contain h-40 w-40 md:h-52 md:w-52"
      />
    </div>
  );
}
