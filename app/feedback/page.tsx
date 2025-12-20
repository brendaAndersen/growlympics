"use client";

export default function FeedbackPage() {
  return (
    <main className="mx-auto w-full max-w-xl px-6 py-28">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-green-400 text-center">
        Share your feedback
      </h1>

      <p className="mt-6 text-muted-foreground">
        Your opinion helps Growlympics grow stronger and greener 🌱.
        Tell us what we can improve or what you loved using the platform.
      </p>

      <form className="mt-12 space-y-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">
            Your name
          </label>
          <input
            type="text"
            placeholder="Jane Doe"
            className="rounded-lg border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">
            Email (optional)
          </label>
          <input
            type="email"
            placeholder="jane@email.com"
            className="rounded-lg border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">
            Your feedback
          </label>
          <textarea
            rows={5}
            placeholder="Share your thoughts..."
            className="rounded-lg border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-gradient-to-r from-green-400 to-green-700 px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Send feedback
        </button>
      </form>
    </main>
  );
}
