import React from 'react'

function ArrowRight({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M18 8L22 12L18 16" />
            <path d="M2 12H22" />
        </svg>
    )
}

export default ArrowRight