import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-royal">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-royal">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-saffron px-6 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-saffron-deep"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
