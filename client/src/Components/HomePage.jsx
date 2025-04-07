import React, { useEffect } from "react";
import { CaretRight } from "@phosphor-icons/react";
import { useLoadingContext } from '../helpers/LoadingContext';

export default function HomePage() {

    const { isLoading, setIsLoading } = useLoadingContext();

    useEffect(()=>{
        setTimeout(()=>{setIsLoading(false)},3000)
    },[setIsLoading])

    return (
        !isLoading && <div className="relative isolate overflow-hidden bg-bground">
                <svg
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 size-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                >
                    <defs>
                        <pattern
                            x="50%"
                            y={-1}
                            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                            width={200}
                            height={200}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M.5 200V.5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
                        <path
                            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" width="100%" height="100%" strokeWidth={0} />
                </svg>
                <div
                    aria-hidden="true"
                    className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                        }}
                        className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-accent to-primary opacity-30"
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 sm:pb-32 max-sm:h-[calc(100vh-52px)] lg:flex lg:px-8 lg:py-20">
                    <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8">
                        <div className="mt-24 inline-flex space-x-6 sm:mt-32 lg:mt-16">
                            <a href="/experience">
                                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm/6 font-semibold text-text hover:text-accent ring-1 ring-inset ring-primary/20">
                                    Experience
                                </span>
                            </a>
                            <a href="/projects">
                                <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-300 hover:text-accent">
                                    <span>Explore published projects</span>
                                    <CaretRight aria-hidden="true" size='1rem' weight='regular' className="" />
                                </span>
                            </a>
                        </div>
                        <h1 className="mt-10 text-pretty lowercase text-5xl font-semibold tracking-tight text-text sm:text-6xl">
                            I don't just build tech
                        </h1>
                        <div className="relative mt-10">
                            <div aria-hidden="true" className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center">
                                <span className="bg-white px-2 text-sm text-gray-500"></span>
                            </div>
                        </div>
                        <div className="inline-flex">
                            <h1 className="mt-10 text-pretty lowercase text-5xl font-semibold tracking-tight text-text sm:text-6xl">
                                I
                            </h1>
                            <h1 className="mt-10 text-pretty lowercase text-5xl font-semibold tracking-tight text-primary sm:text-6xl">
                                &nbsp;buildtechsys
                            </h1>
                        </div>
                        <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
                            I'm a fullstack developer and technology consultant based in Texas, USA. Lets build tech, together.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <a
                                href="/contact"
                                className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-text shadow-sm hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                            >
                                Contact Derek
                            </a>
                            <a href="/about" className="text-sm/6 font-semibold text-text hover:text-accent">
                                Learn about him <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                    <div className="max-sm:hidden mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                        <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                            <img
                                alt="App screenshot"
                                src="/deadfallroadScreenshot.png"
                                width={2432}
                                height={1442}
                                className="w-[76rem] rounded-xl bg-white/5 shadow-2xl ring-1 ring-white/10"
                            />
                        </div>
                    </div>
                </div>
            </div>
    )
}