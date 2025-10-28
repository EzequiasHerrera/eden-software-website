export default function Loading() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-background font-sans ">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    <h1 className="max-w-xs text-7xl font-semibold leading-14 tracking-tight text-zinc-50">
                        Eden Software
                    </h1>
                    <p className="max-w-md text-lg leading-8 text-zinc-600">
                        Looking for a starting point or more instructions? Head
                    </p>
                </div>

                <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
                </div>
            </main>
        </div>
    );
}
