import React from "react";

export default function AboutPage() {
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
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-text sm:text-5xl">
                                    Hey, I'm Derek
                                </h1>
                                <p className="mt-6 text-xl/8 text-accent">
                                    First of all, thanks for checking out my site! Lots of time and effort has gone into various iterations of this project. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="-ml-12 -mt-12 p-12 max-sm:w-dvw max-sm:ml-0 max-sm:pl-0 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <img
                            alt=""
                            src="/derek.jpg"
                            className="w-[48rem] rounded-xl md:max-w-none bg-bground shadow-xl ring-1 ring-white/15 sm:w-[57rem]"
                        />
                    </div>
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl text-lg text-text lg:max-w-lg">
                                <p>
                                    I'm a born and raised Texan that has been on God's green Earth for the past 23 years. I've grown up around tech my whole life, getting my first computer around the age of 10. From that point on, a passion was born.
                                    I built my first computer at 14, and realized that was something incredibly fun and rewarding. 
                                </p>
                                <p className="mt-8">
                                    Throughout high school I completed various tech support and basic web development classes. My teachers made me realize that cybersecurity and software development were the paths of the future.
                                </p>
                                <p className="mt-8">
                                    During college I decided that participating in mathematics research would be a fun and necessary part of my journey. Getting to work with PhDs in their respective fields was incredibly interesting and eye opening.
                                    Being presented with the opportunity to write bleeding-edge code, explore better ways of forecasting disease behaviors, and present our ideas was definitely fulfilling, academically.  
                                    I met a lot of great friends and mentors during this chapter of my life as well. 
                                </p>
                                <h2 className="mt-8 text-2xl tracking-tight text-accent">The Present</h2>
                                <p className="mt-6">
                                    I have found an increasing passion for building Fullstack Web Applications after completing an internship my senior year of university. I built a web app for providing information and accepting RSVP details to my graduation party.
                                    I also just recently built a site for an old rock band from Memphis, TN so they could sell some new music. 
                                    <br/>
                                    I am an avid gamer, golfer, espresso-maker, and serial learner... which is why I am:
                                </p>
                                <h2 className="mt-2 text-pretty text-3xl font-semibold tracking-tight text-primary sm:text-4xl">Forever Curious</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}