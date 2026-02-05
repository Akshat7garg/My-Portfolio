import { Message, Send } from "@/components/svgs/vectors"
import { appConfig } from "@/config/env"

export const emailConfig = {
    modal: {
        title: "Send me a message",
        description: "Fill out the form below and I’ll respond as soon as possible."
    },

    form: {
        name: {
            label: "Name",
            placeholder: "Your full name",
            error: "Name must be at least 2 characters."
        },
        phone: {
            label: "Phone",
            placeholder: "+91 XXXXX XXXXX",
            error: "Phone number must be at least 10 characters."
        },
        email: {
            label: "Email",
            placeholder: "your.email@example.com",
            error: "Please enter a valid email address."
        },
        message: {
            label: "Message",
            placeholder: "Tell me about your project, opportunity, or just say hell0...",
            error: "Message must be at least 10 characters."
        }
    },

    action: {
        icon: Send,
        label: "Send Message"
    },

    privacyNote: "Your information will only be used to respond to your message.",

    feedback: {
        success: "Thanks for your message! I'll get back to you soon.",
        error: "Something went wrong. Please try again."
    }
}

export const whatsappConfig = {
    modal: {
        title: "Message me on WhatsApp",
        description: "Type your message below and I’ll get back to you on WhatsApp."
    },

    field: {
        label: "Your message",
        placeholder: "Type your message here...",
        defaultMessage: "Hi Akshat, I came across your portfolio and would like to connect regarding an opportunity."
    },

    action: {
        icon: Message,
        href: `https://wa.me/${appConfig.contact.whatsapp}`,
        label: "Open WhatsApp"
    },

    note: "You’ll be redirected to WhatsApp or WhatsApp Web."
}