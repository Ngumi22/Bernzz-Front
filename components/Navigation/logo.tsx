import Image from "next/image";
export default function Logo() {
  return (
    <Image
      src="/logooo.png"
      alt="Bernzz Logo"
      width={230}
      height={230}
      priority
      className="object-contain m-auto"
    />
  );
}
