"use client";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/use-sidebar";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import { Hint } from "@/components/hint";

function Toggle() {
  const { collapsed, onExpand, onCollapse } = useSidebar((state) => state);
  const label = collapsed ? "Expand" : "Collapse";
  return (
    <>
      {!collapsed && (
        <div className="p-3 pl-6 mb-3 flex items-center w-full">
          <p className="font-semibold text-primary">For you</p>
          <Hint label={label} side="right" asChild>
            <Button
              className="h-auto p-2 ml-auto hover:bg-slate-400"
              variant={"ghost"}
              onClick={onCollapse}
            >
              <ArrowLeftCircle className="h-4 w-4" />
            </Button>
          </Hint>
        </div>
      )}
      {collapsed && (
        <div className="hidden lg:flex p-3 mb-3  items-center justify-center w-full">
          <Hint label={label} side="right" asChild>
            <Button
              className="h-auto p-2 hover:bg-slate-400"
              variant={"ghost"}
              onClick={onExpand}
            >
              <ArrowRightCircle className="h-4 w-4" />
            </Button>
          </Hint>
        </div>
      )}
    </>
  );
}

export default Toggle;
