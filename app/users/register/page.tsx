import { Input } from "@/components/common/input/page"
import { Button } from "@/components/ui/button"

export default function UserLoginPage() {
    return (
        <>
         <main className="mx-auto w-full max-w-xl px-6 py-28">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-green-400 text-center">
                Join us!
            </h1>
            <form className="mt-12 space-y-6">
                 <Input
                    name="name"
                    placeholder="Name"
                    requiredField
                    className="sm:col-span-2"
                  />
                 <Input
                    name="email"
                    placeholder="E-mail"
                    requiredField
                    className="sm:col-span-2"
                  />
                  <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    requiredField
                    className="sm:col-span-2"
                  />
                <div className="">
                    <Button
                    type="submit"
                    className="w-full rounded-lg bg-gradient-to-r from-green-400 to-green-700 px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    >
                    Start planting!
                    </Button>
                </div>
            </form>
            </main>
        </>
    )
}