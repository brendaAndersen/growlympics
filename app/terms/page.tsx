export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-20">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-green-400 text-center">
        Terms and Conditions
      </h1>

      <p className="mt-4 text-muted-foreground">
        Welcome to <strong>Growlympics</strong>. By accessing or using our platform,
        you agree to the terms described below. Please read carefully.
      </p>

      <section className="mt-12 space-y-6">
        <div>
          <h2 className="text-xl font-semibold">1. Purpose of the Platform</h2>
          <p className="mt-2 text-muted-foreground">
            Growlympics is a platform designed to register, monitor and encourage
            plant cultivation, contributing to environmental awareness and the
            preservation of planet Earth.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">2. User Responsibilities</h2>
          <p className="mt-2 text-muted-foreground">
            Users are responsible for the accuracy of the information provided and
            for using the platform in an ethical, respectful and lawful manner.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">3. Environmental Commitment</h2>
          <p className="mt-2 text-muted-foreground">
            The platform promotes positive environmental actions, but does not
            guarantee specific ecological outcomes resulting from individual use.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">4. Changes to Terms</h2>
          <p className="mt-2 text-muted-foreground">
            We reserve the right to update these terms at any time. Continued use
            of the platform indicates acceptance of the revised terms.
          </p>
        </div>
      </section>

      <p className="mt-16 text-sm text-muted-foreground">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </main>
  );
}
