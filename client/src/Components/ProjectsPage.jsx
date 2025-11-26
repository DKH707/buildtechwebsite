import React, {useEffect} from "react";
import { useLoadingContext } from '../helpers/LoadingContext';
import { Helmet } from "react-helmet";
import{ AirplaneTakeoff, CalendarCheck, GithubLogo, VinylRecord} from '@phosphor-icons/react'

export default function ProjectsPage() {

      const { isLoading, setIsLoading } = useLoadingContext();
    
        useEffect(()=>{
                setTimeout(()=>{setIsLoading(false)},3000)
            },[setIsLoading])

    return (
        <>
          <Helmet>
            {/* Primary Meta Tags */}
            <title>Projects | Buildtech Systems - Web Development Portfolio</title>
            <meta
              name="title"
              content="Projects | Buildtech Systems - Web Development Portfolio"
            />
            <meta
              name="description"
              content="Explore Derek's web development portfolio featuring fullstack applications, e-commerce sites, and custom web solutions. Projects include MERN stack apps, React sites, and more."
            />
            <meta
              name="keywords"
              content="web development portfolio, fullstack projects, MERN stack examples, React projects, e-commerce web apps, Texas developer portfolio, custom web applications"
            />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.buildtechsys.com/projects" />
            <meta
              property="og:title"
              content="Projects | Buildtech Systems Portfolio"
            />
            <meta
              property="og:description"
              content="Explore Derek's web development portfolio featuring fullstack applications, e-commerce sites, and custom web solutions."
            />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://www.buildtechsys.com/projects" />
            <meta
              property="twitter:title"
              content="Projects | Buildtech Systems Portfolio"
            />
            <meta
              property="twitter:description"
              content="Explore Derek's web development portfolio featuring fullstack applications and custom web solutions."
            />

            {/* Canonical URL */}
            <link rel="canonical" href="https://www.buildtechsys.com/projects" />
          </Helmet>
          
          {!isLoading && <div className="relative isolate overflow-hidden bg-bground px-6 py-20 sm:py-20 lg:overflow-visible lg:px-0">
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
                    <h1 className="max-w-lg text-pretty text-4xl font-semibold tracking-tight text-text sm:text-5xl">
                        Published Projects
                    </h1>
                    <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-10 lg:grid-cols-6 lg:grid-rows-2">
                        <div className="flex p-px lg:col-span-4">
                            <div className="overflow-hidden rounded-lg bg-bground ring-1 ring-white/15 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
                            <a href="https://www.deadfallroad.band/" target="_blank" rel="noopener noreferrer">
                                <img
                                    alt="Deadfall Road band website screenshot showing e-commerce music store"
                                    src="/deadfallroadScreenshot2.png"
                                    className="h-90 object-cover object-left border-b-white/15 saturate-0 hover:saturate-100 border-b"
                                />
                                </a>
                                <div className="p-10">
                                    <h3 className="text-sm/4 font-semibold text-gold items-center inline-flex"><VinylRecord weight="duotone" size="24"/>&nbsp;Deadfall Road</h3>
                                    <p className="mt-2 text-lg font-medium tracking-tight text-white">Fullstack E-Commerce Web App</p>
                                    <p className="mt-2 text-sm/6 text-gray-300">
                                        Web Application built for a Memphis, TN band to sell digital copies of their latest CDs. This application utilizes the MERN stack, Snipcart, and Vercel
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex p-px lg:col-span-2">
                            <div className="overflow-hidden rounded-lg bg-bground ring-1 ring-white/15 lg:rounded-tr-[2rem]">
                            <a href="https://github.com/DKH707" target="_blank" rel="noopener noreferrer">
                                <img
                                    alt="GitHub profile link for DKH707"
                                    src="/Github.png"
                                    className="h-90 object-cover rounded-bl-2xl border-b-white/15 border-b saturate-0 hover:saturate-100 border-l-white/15 border-l ml-auto"
                                />
                                </a>
                                <div className="p-10">
                                    <h3 className="text-sm/4 font-semibold text-gold items-center inline-flex"><GithubLogo weight='duotone' size='24'/>&nbsp;Github</h3>
                                    <p className="mt-2 text-lg font-medium tracking-tight text-white">Check out any of my public repositories</p>
                                    <p className="mt-2 text-sm/6 text-gray-300">
                                        Not everything I've done is showcased here, I've got more on my Github
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex p-px lg:col-span-2">
                            <div className="overflow-hidden rounded-lg bg-bground ring-1 ring-white/15 lg:rounded-bl-[2rem]">
                            <a href="https://gradparty.buildtechsys.com/" target="_blank" rel="noopener noreferrer">
                                <img
                                    alt="RSVP web application for graduation party event management"
                                    src="/RSVP_collage.png"
                                    className="h-80 rounded-br-2xl rounded-bl-2xl mx-auto border-b-white/15 border-b saturate-0 hover:saturate-100 border-l-white/15 border-l border-r-white/15 border-r object-cover"
                                />
                            </a>
                                <div className="p-10">
                                    <h3 className="text-sm/4 font-semibold text-gold items-center inline-flex"><CalendarCheck weight='duotone' size="24"/>&nbsp;RSVP Web App</h3>
                                    <p className="mt-2 text-lg font-medium tracking-tight text-white">Event App built with the MERN Stack</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-300">
                                        Web application utilized for my university graduation party, distributed via QR Code
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex p-px lg:col-span-4">
                            <div className="overflow-hidden rounded-lg bg-bground ring-1 ring-white/15 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
                            <a href="https://www.kilroy.faaoda.com/" target="_blank" rel="noopener noreferrer">
                                <img
                                    alt="Kilroy Aviation LLC website for FAA recognized ODA"
                                    src="/KilroyScreenshot.png"
                                    className="h-90 object-cover object-right saturate-0 hover:saturate-100 border-b-white/15 border-b"
                                />
                                </a>
                                <div className="p-10">
                                    <h3 className="text-sm/4 font-semibold text-gold items-center inline-flex"><AirplaneTakeoff  weight='duotone' size='24'/>&nbsp;Kilroy Aviation, LLC</h3>
                                    <p className="mt-2 text-lg font-medium tracking-tight text-white">Website for a recognized ODA of the FAA</p>
                                    <p className="mt-2 text-sm/6 text-gray-300">
                                        This site being my earliest production site, I built it in Squarespace. Still requires updating and meetings with the team occasionally
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}