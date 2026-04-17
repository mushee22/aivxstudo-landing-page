"use client"
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function CTAbtnContent({ href, text, className = '', onClick }: { href?: string, text: string, className?: string, onClick?: () => void }) {
    const searchParams = useSearchParams();
    const query = searchParams.toString();
    const link = href ? `${href}${query ? `?${query}` : ''}` : `https://studio.aivx.in/signup${query ? `?${query}` : ''}`;

    return (
        <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${className}`}
            onClick={onClick}
        >
            {text}
        </Link>
    )
}

export default function CTAbtn(props: { href?: string, text: string, className?: string, onClick?: () => void }) {
    return (
        <Suspense fallback={
            <Link
                href={props.href || "https://studio.aivx.in/signup"}
                target="_blank"
                rel="noopener noreferrer"
                className={props.className}
                onClick={props.onClick}
            >
                {props.text}
            </Link>
        }>
            <CTAbtnContent {...props} />
        </Suspense>
    )
}
    