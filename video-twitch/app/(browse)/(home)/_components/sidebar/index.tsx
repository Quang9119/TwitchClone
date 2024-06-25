import { getRecommendations } from "@/lib/recommend-service";
import { Toggle, ToggleSkeleton } from "./toggle";
import { Wrapper } from "./wrapper";
import { Recommended, RecommendedSkeleton } from "./recommend";

export async function Sidebar() {
  const recommend = await getRecommendations();

  return (
    <Wrapper>
      <Toggle />
      <div className="space-y-4 pt-4 lg:pt-0">
        <Recommended data={recommend} />
      </div>
    </Wrapper>
  );
}

export const SidebarSkeleton = () => {
  return (
    <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E5] z-50">
      <ToggleSkeleton />
      <RecommendedSkeleton />
    </aside>
  );
};
