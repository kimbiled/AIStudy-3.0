"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { type Url } from "next/dist/shared/lib/router/router";

interface Props {
	children: ReactNode;
	className?: string;
	href: Partial<Url>;
}

export default function NavLink({ children, className, href }: Props) {
	const isActive: boolean =
		typeof href === "object" ? usePathname().includes(href.pathname ?? "") : usePathname().includes(href);

	return (
		<Link href={href} className={`${className} ${isActive ? "active" : ""}`}>
			{children}
		</Link>
	);
}
