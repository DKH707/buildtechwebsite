import React from "react";

export default function ProjectsPage() {
    return (
        <>
        
        <div className="relative isolate overflow-hidden bg-bground px-6 py-20 sm:py-20 lg:overflow-visible lg:px-0">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <svg
                        aria-hidden="true"
                        className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-white/10 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    >
                        <defs>
                            <pattern
                                x="50%"
                                y={-1}
                                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                                width={200}
                                height={200}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M100 200V.5M.5 .5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-bground">
                            <path
                                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
                    </svg>
                </div>
                <div className="mx-auto px-6 lg:max-w-7xl lg:px-8">
                    <p className="max-w-lg text-pretty text-4xl font-semibold tracking-tight text-text sm:text-5xl">
                        Published Projects
                    </p>
                    <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-10 lg:grid-cols-6 lg:grid-rows-2">
                        <div className="flex p-px lg:col-span-4">
                            <div className="overflow-hidden rounded-lg bg-primary/10 ring-1 ring-white/15 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
                            <a href="https://www.deadfallroad.band/" target="__blank" referrerPolicy="origin">
                                <img
                                    alt=""
                                    src="/deadfallroadScreenshot2.png"
                                    className="h-90 object-cover object-left border-b-white/15 border-b"
                                />
                                </a>
                                <div className="p-10">
                                    <h3 className="text-sm/4 font-semibold text-gray-400">Deadfall Road</h3>
                                    <p className="mt-2 text-lg font-medium tracking-tight text-white">Fullstack E-Commerce Web App</p>
                                    <p className="mt-2 text-sm/6 text-gray-400">
                                        Web Application built for a Memphis, TN band to sell digital copies of their latest CDs. This application utilizes the MERN stack, Snipcart, and Vercel
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex p-px lg:col-span-2">
                            <div className="overflow-hidden rounded-lg bg-primary/10 ring-1 ring-white/15 lg:rounded-tr-[2rem]">
                            <a href="https://github.com/DKH707" target="__blank">
                                <img
                                    alt=""
                                    src="/Github.png"
                                    className="h-90 object-cover rounded-bl-2xl border-b-white/15 border-b border-l-white/15 border-l place-self-end"
                                />
                                </a>
                                <div className="p-10">
                                    <h3 className="text-sm/4 font-semibold text-gray-400">Github</h3>
                                    <p className="mt-2 text-lg font-medium tracking-tight text-white">Check out any of my public repositories</p>
                                    <p className="mt-2 text-sm/6 text-gray-400">
                                        Not everything I've done is showcased here, I've got more on my Github.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex p-px lg:col-span-2">
                            <div className="overflow-hidden rounded-lg bg-primary/10 ring-1 ring-white/15 lg:rounded-bl-[2rem]">
                            <a href="https://gradparty.buildtechsys.com/" target="__blank">
                                <img
                                    alt=""
                                    src="/RSVP_collage.png"
                                    className="h-80 rounded-br-2xl rounded-bl-2xl place-self-center border-b-white/15 border-b border-l-white/15 border-l border-r-white/15 border-r object-cover"
                                />
                            </a>
                                <div className="p-10">
                                    <h3 className="text-sm/4 font-semibold text-gray-400">RSVP Web App</h3>
                                    <p className="mt-2 text-lg font-medium tracking-tight text-white">Event App built with the MERN Stack</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                                        Web application utilized for my university graduation party, dsitributed via QR Code
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex p-px lg:col-span-4">
                            <div className="overflow-hidden rounded-lg bg-primary/10 ring-1 ring-white/15 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
                            <a href="https://www.kilroy.faaoda.com/" target="__blank" referrerPolicy="origin">
                                <img
                                    alt=""
                                    src="/KilroyScreenshot.png"
                                    className="h-90 object-cover object-right border-b-white/15 border-b"
                                />
                                </a>
                                <div className="p-10">
                                    <h3 className="text-sm/4 font-semibold text-gray-400">Kilroy Aviation, LLC</h3>
                                    <p className="mt-2 text-lg font-medium tracking-tight text-white">Website for a recognized ODA of the FAA</p>
                                    <p className="mt-2 text-sm/6 text-gray-400">
                                        This site being my earliest production site, I built it in Squarespace. Still requires updating and meetings with the team occasionally.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}