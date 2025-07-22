import type { LucideIcon } from 'lucide-react';

export interface Game {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  dataAiHint: string;
  icon: LucideIcon;
}
