import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    My portfolio - COMING SOON
                </p>
            </div>

            <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    sizes="100vh"
                    height={0}
                    width={1000}
                    priority
                />
            </div>

        </main>
    );
}
