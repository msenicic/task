"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link href={href} className={`nav-link p-0 pb-2 ${isActive && 'active'} fw-normal`} style={{ color: "currentColor" }}>
      {children}
    </Link>
  );
};