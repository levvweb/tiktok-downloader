import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-lg border-2 border-border bg-input px-4 py-2 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 md:h-14 md:text-lg",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
