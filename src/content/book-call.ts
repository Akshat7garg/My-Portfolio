import { appConfig } from "@/config/config"

export const bookCallCTA = {
    title: "Looks like you’re interested — let’s connect.",
    action: "Book a Free Call"
}

export const inquiryDialog = {
    modal: {
        title: "Tell me about yourself",
        description: "Please select your inquiry type to continue."
    },

    identity: {
        title: "Are you a?",
        options: [
            {
                value: "founder",
                label: "Founder"
            },
            {
                value: "hr",
                label: "HR / Company Representative"
            },
            {
                value: "other",
                label: "Other (not related to job or freelance work)"
            }
        ]
    },

    inquiry: {
        title: "What's your inquiry about?",
        professional: [
            {
                value: "job",
                label: "Want to hire you for job / job offer"
            },
            {
                value: "freelance",
                label: "Have some freelance or contract work"
            },
            {
                value: "none",
                label: "None of the above"
            }
        ],
        other: [
            {
                value: "mentorship",
                label: "Want to get some guidance / mentorship"
            },
            {
                value: "query",
                label: "Want to resolve a query"
            },
            {
                value: "referral",
                label: "Other (referral or general discussion)"
            }
        ]
    },

    action: {
        label: "Continue",
        href: appConfig.call.bookingURL
    }
}