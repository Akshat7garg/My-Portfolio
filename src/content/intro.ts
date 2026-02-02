import {
    Docker,
    NextJs,
    NodeJs,
    RAG,
    SocketIO,
    TypeScript
} from "@/components/svgs/stacks";
import { person } from "@/config/profile";

export const intro = {
    greeting: `Hi, I’m ${person.fullName} 👋`,
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