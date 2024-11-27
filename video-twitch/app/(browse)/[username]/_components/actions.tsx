"use client";

import { onFollow, onUnfollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { toast } from "sonner";

interface ActionsProps {
  id: string;
  isFlowing: boolean;
}
export const Actions = ({ id, isFlowing }: ActionsProps) => {
  const [isPending, startTransition] = useTransition();
  const handleFollow = () => {
    startTransition(() => {
      onFollow(id)
        .then((data) => {
          toast.success(`You are now following ${data.following.username}`);
        })
        .catch(() => {
          toast.error("Failed to follow the user");
        });
    });
  };
  const handleUnFollow = () => {
    startTransition(() => {
      onUnfollow(id)
        .then((data) => {
          toast.success(`You have unfollowed ${data.following.username}`);
        })
        .catch(() => {
          toast.error("Failed to follow the user");
        });
    });
  };
  const onClick = () => {
    if (isFlowing) {
      handleUnFollow();
    } else {
      handleFollow();
    }
  };
  return (
    <button
      disabled={isPending}
      onClick={onClick}
      className={`px-4 py-2 rounded ${
        isPending ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#772ce8] hover:bg-[#5b22b2]'
      } text-white`}
    >
      {isFlowing ? "Unfollow" : "Follow"}
    </button>
  );
};
