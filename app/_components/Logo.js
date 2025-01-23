import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={logo}
        width="60"
        height="60"
        quality={100}
        alt="Panorama Retreat Logo"
      />
      <span className="text-xl font-semibold text-primary-100">
        Panorama Retreat
      </span>
    </Link>
  );
}

export default Logo;
