import type { Game } from './types';
import { BrainCircuit, Puzzle, Calculator, Feather } from 'lucide-react';

export const games: Game[] = [
  {
    slug: 'memory-match',
    title: 'Memory Match',
    description: 'Test your memory with this classic card matching game.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'brain memory',
    icon: BrainCircuit,
  },
  {
    slug: 'quiz-whiz',
    title: 'Quiz Whiz',
    description: 'Answer challenging questions and become a quiz champion.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'quiz challenge',
    icon: Puzzle,
  },
  {
    slug: 'math-blaster',
    title: 'Math Blaster',
    description: 'Solve math problems to save the galaxy from asteroids.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'math space',
    icon: Calculator,
  },
  {
    slug: 'word-weaver',
    title: 'Word Weaver',
    description: 'Create words from a set of letters before time runs out.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'words letters',
    icon: Feather,
  },
];
