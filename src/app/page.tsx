import { games } from '@/lib/data';
import { GameCard } from '@/components/game-card';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary">
                  Classroom Arcade
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  A curated collection of fun and educational minigames designed by teachers, for students.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <Separator />

        <section id="games" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline mb-8">
              Game Library
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {games.map((game) => (
                <GameCard key={game.slug} game={game} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Classroom Arcade. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
