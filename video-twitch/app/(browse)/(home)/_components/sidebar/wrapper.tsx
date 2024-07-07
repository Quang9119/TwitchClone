"use client";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import { ToggleSkeleton } from "./toggle";
import { RecommendedSkeleton } from "./recommend";
import { useIsClient } from "usehooks-ts";

interface WrapperProps {
  children: React.ReactNode;
}
export const Wrapper = ({ children }: WrapperProps) => {
  const { collapsed } = useSidebar((state) => state);
  const isClient = useIsClient();
  
  if (!isClient)
    return (
      <aside
        className={cn(
          "fixed left-0 flex flex-col lg:w-60 w-[70px] h-full bg-gray-800 border-r border-[#2D2E35] z-50"
        )}
      >
        <ToggleSkeleton />
        <RecommendedSkeleton />
      </aside>
    );
  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col w-60 h-full bg-gray-800 border-r border-[#2D2E35]",
        collapsed && "w-[70px]"
      )}
    >
      {children}
    </aside>
  );
};
