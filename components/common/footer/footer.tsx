import Link from "next/link"

export const Footer = () => {
    return (
    <footer className="border-t border-border">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 py-6 md:flex-row md:justify-between">
        
        <Link
            href="/"
            className="bg-gradient-to-r from-green-400 to-green-800 bg-clip-text text-transparent font-semibold"
        >
            Growlympics
        </Link>
        <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} • Powered by people changing the world{" "}
        {/* <span className="font-medium text-foreground"> 
        </span> */}
      </p>

        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/terms" className="transition-colors hover:text-green-400">
            Terms and Conditions
            </Link>
            <Link href="/feedback" className="transition-colors hover:text-green-400">
            Feedback
            </Link>
        </nav>

        </div>
    </div>
    </footer>

    )
}