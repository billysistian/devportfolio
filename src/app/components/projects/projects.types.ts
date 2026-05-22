export type Project = {
  title: string;
  role: string;
  description: string;
  tech: string[];

  image?: string;
  demo?: string | null;
  views?: string | null;
  github?: string | null;
};