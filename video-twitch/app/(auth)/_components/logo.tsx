import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center">
        <Image src="/logo.svg" alt="StreamHive Logo" width={40} height={40} />
        <h1
          className={cn(
            font.className,
            "text-xl font-semibold ml-2",
            "hidden lg:block"
          )}
        >
          StreamHive
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
