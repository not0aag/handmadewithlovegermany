import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronDown, type LucideIcon } from "lucide-react";
import { Slot as SlotPrimitive } from "radix-ui";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "cursor-pointer group whitespace-nowrap focus-visible:outline-hidden inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-60 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]",
        secondary: "bg-[var(--color-accent-soft)] text-[var(--color-primary-dark)] hover:bg-[var(--color-accent)]",
        outline: "bg-transparent text-[var(--color-primary)] border-2 border-[var(--color-primary)] hover:bg-[var(--color-accent-soft)]",
        ghost: "text-[var(--color-text-muted)] hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-primary)]",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        dim: "text-[var(--color-text-muted)] hover:text-[var(--color-text)]",
      },
      size: {
        lg: "h-11 rounded-full px-8 text-base gap-2 [&_svg:not([class*=size-])]:size-5",
        md: "h-10 rounded-full px-6 text-sm gap-1.5 [&_svg:not([class*=size-])]:size-4",
        sm: "h-8 rounded-full px-4 text-xs gap-1.5 [&_svg:not([class*=size-])]:size-3.5",
        icon: "size-10 rounded-full [&_svg:not([class*=size-])]:size-4 shrink-0",
      },
      mode: {
        default: "focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2",
        icon: "focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2",
        link: "text-[var(--color-primary)] h-auto p-0 bg-transparent rounded-none hover:bg-transparent hover:underline underline-offset-4",
      },
      shape: {
        default: "",
        circle: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      mode: "default",
      size: "md",
      shape: "default",
    },
  }
);

function Button({
  className,
  variant,
  shape,
  mode,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? SlotPrimitive.Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, shape, mode, className }))}
      {...props}
    />
  );
}

interface ButtonArrowProps extends React.SVGProps<SVGSVGElement> {
  icon?: LucideIcon;
}

function ButtonArrow({ icon: Icon = ChevronDown, className, ...props }: ButtonArrowProps) {
  return <Icon data-slot="button-arrow" className={cn("ms-auto -me-1", className)} {...props} />;
}

export { Button, ButtonArrow, buttonVariants };
