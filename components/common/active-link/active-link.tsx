import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export type ActiveLinkProps = {
  href: string;
  exact?: boolean;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;


export const ActiveLink = ({
  href,
  children,
  exact = false,
  className,
}: ActiveLinkProps) => {
  const pathname = usePathname()

  const isActive = exact
    ? pathname === href
    : pathname.startsWith(href)

  return (
    <Link
      href={href}
      className={cn(
        "transition-colors decoration-dotted underline-offset-4",
        isActive
          ? "underline text-green-500 font-semibold"
          : "text-muted-foreground hover:underline hover:text-green-500",
        className
      )}
    >
      {children}
    </Link>
  )
}
