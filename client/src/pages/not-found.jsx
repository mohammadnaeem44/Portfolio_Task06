import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Page not found</p>
        <Link href="/">
          <a className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors">
            Go Home
          </a>
        </Link>
      </div>
    </div>
  );
}