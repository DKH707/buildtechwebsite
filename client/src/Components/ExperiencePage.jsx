import React, {useEffect} from "react";
import { useLoadingContext } from '../helpers/LoadingContext';
import { Atom, Briefcase, CaretDoubleDown, Database, FileCss, FileHtml, GithubLogo, HardDrive, HardDrives, Student } from "@phosphor-icons/react";
import SkillsGrid from "./SkillsGrid";
import Divider from "./Divider";

export default function ExperiencePage() {

    const { setIsLoading } = useLoadingContext();
    
        useEffect(()=>{
                setTimeout(()=>{setIsLoading(false)},3000)
            },[setIsLoading])
    

    const professionalTimeline = [
        {
            name: 'Founded Buildtech Systems',
            description:
                'Created Buildtech with the goal of completing contract web development and it support',
            date: 'Jul 2020',
            dateTime: '2020-07',
        },
        {
            name: 'Mathematics Research Assistant',
            description:
                'Worked in a team of researchers providing new ways to forecast disease behaviors',
            date: 'Feb 2021',
            dateTime: '2021-02',
        },
        {
            name: 'Fullstack Development Intern',
            description:
                'Worked at Collier Consulting and learned fullstack development by assisting in the modernization of an existing codebase',
            date: 'May 2023',
            dateTime: '2023-05',
        },
        {
            name: 'Fullstack Developer with Buildtech',
            description:
                'Currently maintain client relationships and build complete applications for a select clientele',
            date: 'May 2024',
            dateTime: '2024-05',
        },
    ]
    const academicTimeline = [
        {
            name: 'Associates of Applied Science in Cybersecurity',
            description:
                'Tarrant County College (Fort Worth, TX)',
            date: 'Dec 2020',
            dateTime: '2020-12',
        },
        {
            name: 'Bachelors of Science in Computer Science',
            description:
                'Tarleton State University (Stephenville, TX)',
            date: 'May 2024',
            dateTime: '2024-05',
        }
    ]

    const skills = [
        {
            name: 'React',
            role: 'Frontend',
            icon:
                <Atom className="text-green-500" size='2.5rem' weight='duotone' />,
            textColor: 'text-green-500',
            ringColor: 'ring-green-500/20'
        },
        {
            name: 'HTML',
            role: 'Frontend',
            icon:
                <FileHtml className="text-green-500" size='2.5rem' weight='duotone' />,
            textColor: 'text-green-500',
            ringColor: 'ring-green-500/20'
        },
        {
            name: 'TailwindCSS',
            role: 'Frontend',
            icon:
                <FileCss className="text-green-500" size='2.5rem' weight='duotone' />,
            textColor: 'text-green-500',
            ringColor: 'ring-green-500/20'
        },
        {
            name: 'MongoDB',
            role: 'Database',
            icon:
                <Database className="text-yellow-500" size='2.5rem' weight='duotone' />,
            textColor: 'text-yellow-500',
            ringColor: 'ring-yellow-500/20'
        },
        {
            name: 'Express/Node',
            role: 'Backend',
            icon:
                <HardDrive className="text-red-500" size='2.5rem' weight='duotone' />,
            textColor: 'text-red-500',
            ringColor: 'ring-red-500/20'
        },
        {
            name: 'Vercel',
            role: 'Hosting-CI/CD',
            icon:
                <HardDrives className="text-orange-500" size='2.5rem' weight='duotone' />,
            textColor: 'text-orange-500',
            ringColor: 'ring-orange-500/20'
        },
        {
            name: 'Git',
            role: 'Version Control',
            icon:
                <GithubLogo className="text-purple-500" size='2.5rem' weight='duotone' />,
            textColor: 'text-purple-500',
            ringColor: 'ring-purple-500/20'
        }
    ]

    const scrollToProfessional = (e) => {
        e.preventDefault();
        const professionalSection = document.getElementById('professional');
        if (professionalSection) {
            professionalSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    const scrollToSkills = (e) => {
        e.preventDefault();
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            skillsSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <div className="relative isolate overflow-hidden bg-bground px-6 py-1 sm:py-20 lg:overflow-visible lg:px-0">
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
                <div className="relative h-screen">
                    <p className="max-w-sm text-pretty text-4xl font-semibold tracking-tight text-text sm:text-5xl inline-flex items-center">
                        Academic<br /> Experience
                    </p>
                    <div className="max-w-xs mx-auto pt-4">
                        <Divider borderColor={'border-primary/75'} />
                    </div>
                    <div className="pt-24 sm:py-32">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-2">
                                {academicTimeline.map((item) => (
                                    <div key={item.name}>
                                        <time dateTime={item.dateTime} className="flex items-center text-sm/6 font-semibold text-accent">
                                            <Student />&nbsp;{item.date}
                                            <div
                                                aria-hidden="true"
                                                className="absolute -ml-2 h-px w-screen -translate-x-full bg-primary/40 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                                            />
                                        </time>
                                        <p className="mt-6 text-lg/8 font-semibold tracking-tight text-text">{item.name}</p>
                                        <p className="mt-1 text-base/7 text-gray-400">{item.description}</p>
                                    </div>
                                ))}
                                <div className="absolute bottom-40 left-1/2 right-1/2 -ml-[20px]">
                                    <button
                                        onClick={scrollToProfessional}
                                        className="cursor-pointer hover:text-accent transition-colors"
                                        aria-label="Scroll to Professional Experience"
                                    >
                                        <CaretDoubleDown size='2.5rem' className='animate-bounce' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="professional" className="relative lg:h-screen max-sm:pb-40">
                    <p className="max-w-sm text-pretty text-4xl font-semibold tracking-tight text-text sm:text-5xl inline-flex items-center">
                        Professional Experience
                    </p>
                    <div className="max-w-xs mx-auto pt-4">
                        <Divider borderColor={'border-primary/75'} />                    
                    </div>
                    <div className="py-24 sm:py-32">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
                                {professionalTimeline.map((item) => (
                                    <div key={item.name}>
                                        <time dateTime={item.dateTime} className="flex items-center text-sm/6 font-semibold text-accent">
                                            <Briefcase />&nbsp;{item.date}
                                            <div
                                                aria-hidden="true"
                                                className="absolute -ml-2 h-px w-screen -translate-x-full bg-primary/40 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                                            />
                                        </time>
                                        <p className="mt-6 text-lg/8 font-semibold tracking-tight text-text">{item.name}</p>
                                        <p className="mt-1 text-base/7 text-gray-400">{item.description}</p>
                                    </div>
                                ))}
                                <div className="absolute lg:bottom-16 bottom-40 left-1/2 right-1/2 -ml-[20px]">
                                    <button
                                        onClick={scrollToSkills}
                                        className="cursor-pointer hover:text-accent transition-colors"
                                        aria-label="Scroll to Skills"
                                    >
                                        <CaretDoubleDown size='2.5rem' className='animate-bounce' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="skills" className="relative lg:h-screen">
                    <p className="max-w-lg text-pretty text-4xl font-semibold tracking-tight text-text sm:text-5xl inline-flex items-center">
                        Specialized<br />Skills
                    </p>
                    <div className="max-w-xs mx-auto pt-4">
                        <Divider borderColor={'border-primary/75'} />                    
                    </div>
                    <div className="py-24 sm:py-32">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <SkillsGrid skills={skills} />
                        </div>
                    </div>
                </div>
                <div className="hidden mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl rounded-xl sm:rounded-xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
                        <img
                            alt=""
                            src="/bandphoto.JPG"
                            className="absolute inset-0 size-full object-cover brightness-150 saturate-0 object-top"
                        />
                        <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
                        <div aria-hidden="true" className="absolute -left-80 -top-56 transform-gpu blur-3xl">
                            <div
                                style={{
                                    clipPath:
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-accent to-primary opacity-[0.45]"
                            />
                        </div>
                        <div
                            aria-hidden="true"
                            className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
                        >
                            <div
                                style={{
                                    clipPath:
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-accent to-primary opacity-25"
                            />
                        </div>
                        <div className="relative mx-auto max-w-2xl lg:right-0">
                            <img
                                alt=""
                                src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-white.svg"
                                className="h-12 w-auto"
                            />
                            <figure>
                                <blockquote className="mt-6 text-lg font-semibold text-text sm:text-xl/8">
                                    <p>
                                        “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                                        molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                                    </p>
                                </blockquote>
                                <figcaption className="mt-6 text-base text-text">
                                    <div className="font-semibold">Eric Graham</div>
                                    <div className="mt-1">Drummer of Deadfall Road</div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}