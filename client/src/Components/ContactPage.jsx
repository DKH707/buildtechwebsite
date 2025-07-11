import React, { useEffect } from "react";
import { useLoadingContext } from "../helpers/LoadingContext";
import {
  At,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

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
  // More questions...
];

export default function ContactPage() {
  const { isLoading, setIsLoading } = useLoadingContext();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [setIsLoading]);

  return (
    !isLoading && (
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
          <h2 className="text-balance text-left text-4xl font-semibold tracking-tight text-text sm:text-5xl">
            Contact Derek
          </h2>
          <p className="mt-2 text-left text-lg/8 text-text">
            Feel free to reach out if you'd like to talk about any projects or
            future opportunities
          </p>
        </div>
        <div className="mx-auto">
          <div className="mx-auto max-w-4xl">
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
                        <a href={faq.url} target="__blank">
                          <p className="text-2xl decoration-1 underline underline-offset-4 text-gray-300 hover:text-primary">
                            {faq.answer}
                          </p>
                        </a>                      </p>
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  );
}
