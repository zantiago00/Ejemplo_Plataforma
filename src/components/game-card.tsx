import type { Game } from '@/lib/types';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  const Icon = game.icon;

  return (
    <Link href={`/games/${game.slug}`} className="block h-full group" aria-label={`Play ${game.title}`}>
      <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out border-2 border-transparent shadow-md bg-card group-hover:shadow-xl group-hover:scale-[1.03] group-hover:border-primary focus-within:border-primary focus-within:scale-[1.03] focus-within:shadow-xl">
        <CardContent className="p-0">
          <div className="relative w-full aspect-video">
            <Image 
              src={game.imageUrl} 
              alt={game.title} 
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              data-ai-hint={game.dataAiHint}
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </CardContent>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 font-headline">
            <Icon className="w-6 h-6 text-primary shrink-0" />
            <span className="truncate">{game.title}</span>
          </CardTitle>
          <CardDescription className="font-body line-clamp-2">{game.description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
