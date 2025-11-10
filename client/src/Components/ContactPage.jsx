import React, { useEffect } from "react";
import { useLoadingContext } from "../helpers/LoadingContext";
import { Helmet } from "react-helmet";
import {
  At,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import ContactForm from "./ContactForm";

const faqs = [
  {
    icon: <At size="1.5rem" weight="duotone" />,
    question: "Email",
    answer: "dhopkins@buildtechsys.com",
    url: "mailto:dhopkins@buildtechsys.com",
  },
  {
    icon: <GithubLogo size="1.5rem" weight="duotone" />,
    question: "Github",
    answer: "DKH707",
    url: "https://github.com/DKH707",
  },
  {
    icon: <LinkedinLogo size="1.5rem" weight="duotone" />,
    question: "LinkedIn",
    answer: "Derek Hopkins (DKH707)",
    url: "https://www.linkedin.com/in/dkh707/",
  },
];

export default function ContactPage() {
  const { isLoading, setIsLoading } = useLoadingContext();
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [setIsLoading]);

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Contact Derek | Buildtech Systems - Let's Work Together</title>
        <meta
          name="title"
          content="Contact Derek | Buildtech Systems - Let's Work Together"
        />
        <meta
          name="description"
          content="Get in touch with Derek at Buildtech Systems for web development, mobile apps, or tech consulting projects. Reach out via email, LinkedIn, or GitHub to discuss opportunities."
        />
        <meta
          name="keywords"
          content="contact Buildtech Systems, hire web developer Texas, Derek Hopkins contact, web development inquiry, tech consulting contact, Crowley TX developer"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.buildtechsys.com/contact" />
        <meta
          property="og:title"
          content="Contact Derek | Buildtech Systems"
        />
        <meta
          property="og:description"
          content="Get in touch with Derek at Buildtech Systems. Let's discuss your web development, mobile app, or tech consulting needs."
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.buildtechsys.com/contact" />
        <meta
          property="twitter:title"
          content="Contact Derek | Buildtech Systems"
        />
        <meta
          property="twitter:description"
          content="Get in touch with Derek at Buildtech Systems. Let's discuss your web development needs."
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.buildtechsys.com/contact" />
      </Helmet>
      
      {!isLoading && (
        <div className="isolate bg-bground px-6 py-20 sm:py-20">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-secondary to-primary opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto px-6 lg:max-w-7xl lg:px-8">
            <h1 className="text-balance text-left text-4xl font-semibold tracking-tight text-text sm:text-5xl">
              Contact Derek
            </h1>
            <p className="mt-2 text-left text-lg/8 text-gray-400">
              Feel free to reach out if you'd like to talk about any projects or
              future opportunities
            </p>
            <p className="mt-2 text-left text-lg/8 text-text">
              Email: <a className="hover:text-accent transition-all" href="mailto:dhopkins@buildtechsys.com">dhopkins@buildtechsys.com</a>
            </p>
          </div>
          <div className="mx-auto">
            <ContactForm/>
            {/* <div className="mx-auto max-w-4xl">
              <dl className="mt-16 divide-y divide-white/10">
                {faqs.map((faq) => (
                  <div key={faq.question} className="py-6 text-left">
                    <div className="inline-flex gap-x-2 items-center text-accent">
                      {faq.icon}
                      <dt>
                        <span className="text-3xl font-semibold">
                          {faq.question}&rarr;
                        </span>
                      </dt>
                      <dd>
                        <p className="text-2xl text-gray-300 hover:text-primary">
                          <a href={faq.url} target="_blank" rel="noopener noreferrer">
                            <p className="text-2xl decoration-1 underline underline-offset-4 text-gray-300 hover:text-primary">
                              {faq.answer}
                            </p>
                          </a>
                        </p>
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>*/}
          </div>
        </div>
      )}
    </>
  );
}