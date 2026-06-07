/**
 * Footer.tsx
 * ----------
 * A single-line footer at the bottom of every page.
 * Keeps things minimal — just a copyright notice.
 */

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Mayur Jogade
        </p>
      </div>
    </footer>
  );
}
