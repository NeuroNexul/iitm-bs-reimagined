"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> & {
    orientation?: "vertical" | "horizontal" | "both";
    width?: number;
    color?: string;
  }
>(({ className, children, orientation, width, color, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport
      className="h-full w-full rounded-[inherit] relative z-0"
      id="scroll"
    >
      {children}
    </ScrollAreaPrimitive.Viewport>
    {(orientation === "horizontal" || orientation === "both") && (
      <ScrollBar orientation="horizontal" width={width} />
    )}
    {(orientation === "vertical" || orientation === "both" || !orientation) && (
      <ScrollBar orientation="vertical" width={width} color={color} />
    )}
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<
    typeof ScrollAreaPrimitive.ScrollAreaScrollbar
  > & {
    width?: number;
    color?: string;
  }
>(
  (
    { className, orientation = "vertical", width = 10, color, ...props },
    ref
  ) => (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      ref={ref}
      orientation={orientation}
      className={cn(
        "flex touch-none select-none transition-colors",
        orientation === "vertical" &&
          "h-full border-l border-l-transparent p-[1px]",
        orientation === "horizontal" && "border-t border-t-transparent p-[1px]",
        className
      )}
      style={{
        ...(orientation === "vertical"
          ? {
              width,
            }
          : {
              height: width,
            }),
      }}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        className={cn(
          "relative rounded-full bg-border",
          orientation === "vertical" && "flex-1"
        )}
        style={{
          backgroundColor: color,
        }}
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
);
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
