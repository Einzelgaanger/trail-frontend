"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = ({ href, exact, children, ...props }: any) => {
  const pathname = usePathname();
  const active = " active";
  const isActive = pathname === href || pathname?.startsWith(href);
  if (isActive) {
    props.className += active;
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};
