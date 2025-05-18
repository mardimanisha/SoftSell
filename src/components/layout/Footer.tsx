export function Footer() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="py-8 border-t border-border/40 bg-[var(--color-bg-accent)]/37">
        <div className="container mx-auto px-4 text-center text-[var(--color-muted)]">
          <p>&copy; {currentYear} SoftSell. All rights reserved.</p>
          <p className="text-sm mt-1">
            A fictional company created for demonstration purposes.
          </p>
        </div>
      </footer>
    );
  }