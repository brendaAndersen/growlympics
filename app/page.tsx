import { Header } from "@/components/common/header";

export default function Home() {
  return (
    <>
     <div className="pt-16 flex bg-background">
      <main className="mx-auto w-full max-w-3xl py-24 px-6">
          <h1
            className="
               text-center text-4xl md:text-5xl font-extrabold tracking-tight
              bg-gradient-to-r from-green-400 via-green-400 to-green-800
              bg-clip-text text-transparent
              opacity-0 animate-slide-up
            "
          >
            Technology that takes root in our planet’s future
            <span className="text-green-500 animate-pulse">.</span>

          </h1>

          <p
            className="
              mt-8 text-center text-lg text-justify leading-relaxed text-muted-foreground
              opacity-0 animate-slide-up
              [animation-delay:200ms]
            "
          >
            Every registered plant is a real step toward a greener tomorrow, uniting technology, people, and care for the Earth.

            Our platform tracks, organizes, and values environmental actions that actively contribute to preservation.

            Each planting strengthens our shared commitment and generates measurable positive impact.
          </p>
           <h2
            className="
              text-center text-slate-300 py-6 text-2xl md:text-2xl font-extrabold tracking-tight
              opacity-0 animate-slide-up underline underline-offset-4 decoration-indigo-500
            "
          >
            Join us and help grow a greener future!
          </h2>
        </main>

      </div>
    </>
  )
}
