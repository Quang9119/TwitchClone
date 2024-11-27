// components/Navbar.tsx
import { Logo } from "@/app/(auth)/_components/logo";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Search } from "./search";
import { Actions } from "./actions";

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-20 z-[49] bg-[#252731] px-2 lg:px-4 flex justify-between shadow-sm items-center">
      <Logo />
      <Search />
      <Actions />
    </div>
  );
};
