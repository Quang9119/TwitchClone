import { getRecommendations } from "@/lib/recommend-service";
import { Toggle, ToggleSkeleton } from "./toggle";
import { Wrapper } from "./wrapper";
import { Recommended, RecommendedSkeleton } from "./recommend";
import { Followed, FollowedSkeleton } from "./followed";
import { getFollowers } from "@/lib/follow-service";
import { getSelf } from "@/lib/auth-service";

export async function Sidebar() {
  const self = await getSelf();
  const recommend = await getRecommendations();
  const followed = await getFollowers();
  return (
    <Wrapper>
      <Toggle />
      <div className="space-y-4 pt-4 lg:pt-0">
        <Followed data={followed} />
        <Recommended data={recommend} />
      </div>
    </Wrapper>
  );
}

export const SidebarSkeleton = () => {
  return (
    <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E5] z-50">
      <ToggleSkeleton />
      <FollowedSkeleton />
      <RecommendedSkeleton />
    </aside>
  );
};
