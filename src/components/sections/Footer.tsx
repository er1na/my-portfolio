export default function Footer() {
    return (
        <footer className="mx-auto max-w-6xl px-4 py-10 text-center text-sm text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} Erina Suzuki. Built with ❤️ Next.js / Tailwind / shadcn / Framer Motion.
        </footer>
    )
}