
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  githubUrl?: string; // Specific link for the source code
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'DevOps' | 'AI';
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
