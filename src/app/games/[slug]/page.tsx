import Link from 'next/link';
import { games } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return games.map((game) => ({
    slug: game.slug,
  }));
}

export default function GamePage({ params }: { params: { slug: string } }) {
  const game = games.find(g => g.slug === params.slug);

  if (!game) {
    notFound();
  }

  const Icon = game.icon;

  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="flex items-center justify-between p-3 md:p-4 border-b bg-card shadow-sm shrink-0">
        <div className="flex items-center gap-3">
            <Icon className="w-6 h-6 text-primary" />
            <h1 className="text-xl md:text-2xl font-bold text-foreground font-headline truncate">
                {game.title}
            </h1>
        </div>
        <Button asChild variant="outline">
          <Link href="/#games">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Arcade
          </Link>
        </Button>
      </header>
      <main className="flex-1 overflow-hidden">
        <iframe
          src={`/games/${game.slug}/index.html`}
          className="w-full h-full border-0"
          title={game.title}
          allowFullScreen
        />
      </main>
    </div>
  );
}
