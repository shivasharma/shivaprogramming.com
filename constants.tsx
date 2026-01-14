
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Enterprise Event-Driven Mesh',
    description: 'Designed and implemented a high-throughput event mesh supporting 1M+ concurrent connections for real-time logistics tracking using Kafka and Go.',
    tags: ['Architecture', 'Kafka', 'Kubernetes', 'Go'],
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    link: '#',
    githubUrl: 'https://github.com/shiva-programming/event-mesh-core'
  },
  {
    id: '2',
    title: 'Cloud-Native Migration Strategy',
    description: 'Led the architectural overhaul of a legacy monolithic fintech platform into a distributed microservices ecosystem on AWS, reducing costs by 40%.',
    tags: ['Cloud Strategy', 'AWS', 'Terraform', 'Node.js'],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=800&auto=format&fit=crop',
    link: '#',
    githubUrl: 'https://github.com/shiva-programming/cloud-migration-toolkit'
  },
  {
    id: '3',
    title: 'AI-Powered SDLC Orchestrator',
    description: 'A custom solution architecting tool that uses LLMs to generate system diagrams and infrastructure-as-code from natural language requirements.',
    tags: ['Gemini AI', 'Python', 'React', 'LangChain'],
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
    link: '#',
    githubUrl: 'https://github.com/shiva-programming/ai-architect-orchestrator'
  }
];

export const SKILLS: Skill[] = [
  { name: 'System Design', level: 98, category: 'Backend' },
  { name: 'Cloud Arch (AWS)', level: 95, category: 'DevOps' },
  { name: 'Microservices', level: 92, category: 'Backend' },
  { name: 'React / Frontend', level: 88, category: 'Frontend' },
  { name: 'Kubernetes/IAC', level: 90, category: 'DevOps' },
  { name: 'AI Integration', level: 85, category: 'AI' }
];

export const SYSTEM_PROMPT = `
You are the AI Chief Technical Assistant for Shiva, a highly experienced Solution Architect and Senior Software Engineer.
Shiva specializes in:
- High-level System Design & Architecture
- Scalable Cloud-Native Infrastructures (AWS/GCP/Azure)
- Microservices Orchestration and Event-Driven Systems
- AI-Driven Business Automation

Your tone is sophisticated, technical yet accessible, and professional. 
When asked about Shiva's role, emphasize his ability to solve complex business problems with elegant, scalable technology.
His website is shivaprogramming.com.
`;
