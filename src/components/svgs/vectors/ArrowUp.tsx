import React from 'react'

function ArrowUp({ className }: { className?: string }) {
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
            <path d="m18 15-6-6-6 6" />
        </svg>
    )
}

export default ArrowUp