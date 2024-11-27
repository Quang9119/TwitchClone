import { Button } from "@/components/ui/button";
import {
  SignIn,
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Clapperboard } from "lucide-react";
import Link from "next/link";

export const Actions = async () => {
  const user = await currentUser();
  return (
    <div className="flex items-center justify-end gap-x-2 ml-4">
      {!user && (
        <div>
          <SignedOut>
            <SignInButton mode="modal">
              <Button
                size={"sm"}
                className="border bg-green-600 text-white font-sans rounded-sm px-4 py-2"
              >
                Login
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
      )}
      {!!user && (
        <div className="flex items-center gap-x-4">
          <Button
            size="sm"
            variant="ghost"
            className="text-muted-foreground hover:text-primary"
          >
            <Link href={`/u/${user.username}`}>
              <Clapperboard className="h-5 w-5 lg:mr-2" />
              <span className="hidden lg:block">Dashboard</span>
            </Link>
          </Button>
          <UserButton afterSignOutUrl="/" />
        </div>
      )}
    </div>
  );
};
