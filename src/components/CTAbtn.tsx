"use client"
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

function CTAbtnContent({ href, text, className = '', onClick, children }: { href?: string, text?: string, className?: string, onClick?: () => void, children?: React.ReactNode }) {

    const searchParams = useSearchParams();

    useEffect(() => {
        if (searchParams) {
            const campaign_source: any = Object.fromEntries(searchParams.entries());
            if (Object.keys(campaign_source).length > 0) {
                localStorage.setItem("campaign_source", JSON.stringify(campaign_source));
            }
        }
    }, [searchParams])

    const handleOnClick = () => {
        const query = localStorage.getItem("campaign_source")
        const parsedQuery = query ? JSON.parse(query) : {}
        const link = href ? `${href}${parsedQuery ? `?${Object.keys(parsedQuery).map(key => `${key}=${parsedQuery[key]}`).join('&')}` : ''}` : `https://studio.aivx.in/signup${parsedQuery ? `?${Object.keys(parsedQuery).map(key => `${key}=${parsedQuery[key]}`).join('&')}` : ''}`;
        window.open(link, "_blank")
        onClick?.();
        //localStorage.removeItem("campaign_source");
    }

    return (
        <button
            className={`${className}`}
            onClick={handleOnClick}
        >
            {children || text}
        </button>
    )
}

export default function CTAbtn(props: { href?: string, text?: string, className?: string, onClick?: () => void, children?: React.ReactNode }) {
    return (
        <Suspense fallback={
            <Link
                href={props.href || "https://studio.aivx.in/signup"}
                target="_blank"
                rel="noopener noreferrer"
                className={props.className}
                onClick={props.onClick}
            >
                {props.children || props.text}
            </Link>
        }>
            <CTAbtnContent {...props} />
        </Suspense>
    )
}
