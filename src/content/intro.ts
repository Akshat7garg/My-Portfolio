import {
    Docker,
    NextJs,
    NodeJs,
    RAG,
    SocketIO,
    TypeScript
} from "@/components/svgs/stacks"
import { Github, LeetCode, LinkedIn, Mail, X } from "@/components/svgs/vectors";
import { appConfig } from "@/config/config";

export const intro = {
    greeting: `Hi, I’m ${appConfig.user.firstName} ${appConfig.user.lastName} 👋`,
    role: "Full Stack & AI Engineer",
    summary: "I build scalable web applications and AI-powered systems using modern frameworks, real-time architectures, and cloud-native development practices."
};

export const skills = [
    {
        icon: NextJs,
        href: "https://nextjs.org/",
        label: "Next.js"
    },
    {
        icon: NodeJs,
        href: "https://nodejs.org/en",
        label: "Node.js"
    },
    {
        icon: TypeScript,
        href: "https://www.typescriptlang.org/",
        label: "TypeScript"
    },
    {
        icon: RAG,
        href: "https://www.pinecone.io/learn/retrieval-augmented-generation/",
        label: "AI / RAG"
    },
    {
        icon: Docker,
        href: "https://www.docker.com/",
        label: "Docker"
    },
    {
        icon: SocketIO,
        href: "https://socket.io/",
        label: "WebSockets"
    }
];

export const resumeURL = appConfig.resume.resumeURL;

export const socialProfiles = [
    {
        icon: Mail,
        href: `mailto:${appConfig.contact.email}`,
        label: "Email Me",
        external: false
    },
    {
        icon: LinkedIn,
        href: appConfig.social.linkedIn,
        label: "LinkedIn",
        external: true
    },
    {
        icon: Github,
        href: appConfig.social.github,
        label: "Github",
        external: true
    },
    {
        icon: X,
        href: appConfig.social.x,
        label: "X",
        external: true
    },
    {
        icon: LeetCode,
        href: appConfig.social.leetCode,
        label: "LeetCode",
        external: true
    }
];