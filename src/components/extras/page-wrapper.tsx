import React from "react";
import NavBar from "./navbar";
import { ScrollArea } from "../ui/scroll-area";
import { cn } from "@/lib/utils";

type Props = {
  showNavBar?: boolean;
  navBarClassName?: string;
  showFooter?: boolean;
  footerClassName?: string;
  children: React.ReactNode;
};

export default function PageWrapper({
  showNavBar = true,
  navBarClassName,
  showFooter = true,
  footerClassName,
  children,
}: Props) {
  return (
    <div className="h-full w-full">
      <ScrollArea className="h-full w-full">
        {showNavBar && (
          <NavBar
            className={cn(
              "fixed top-0",
              "bg-background/75 backdrop-blur-sm",
              navBarClassName
            )}
          />
        )}
        <div className="h-20" />
        {children}
        {showFooter && <div className={footerClassName} />}
      </ScrollArea>
    </div>
  );
}
