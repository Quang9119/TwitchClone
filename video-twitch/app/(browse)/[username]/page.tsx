import { Button } from "@/components/ui/button";
import { followUser, isFollowingUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";
import { notFound } from "next/navigation";
import { Actions } from "./_components/actions";

interface UserPageProps {
  params: {
    username: string;
  };
}
const UserPage = async ({ params }: UserPageProps) => {
  const user = await getUserByUsername(params.username);
  if (!user) {
    notFound();
  }
  const isFollowing = await isFollowingUser(user.id);
  return (
    <div className="flex flex-col gap-y-4">
      <p>Username : {user.username}</p>
      <p>User Id : {user.id}</p>
      <p>Is Following : {`${isFollowing}`}</p>
      <Actions id={user.id} isFlowing={isFollowing} />
    </div>
  );
};

export default UserPage;
