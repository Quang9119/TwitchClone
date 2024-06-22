// components/Navbar.tsx
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton mode="modal">
          <button className="border bg-green-600 text-white font-sans rounded-sm px-4 py-2">
            Sign In
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};
