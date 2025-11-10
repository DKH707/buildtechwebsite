import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLoadingContext } from '../helpers/LoadingContext';
import { useLiveQuery } from '../../lib/sanity-client';
import { 
  Package, 
  PuzzlePiece, 
  Clock, 
  CheckCircle,
  ArrowRight 
} from '@phosphor-icons/react';

export default function ServicesPage() {
  const { isLoading, setIsLoading } = useLoadingContext();

  // Use live queries for real-time updates from Sanity
  const { data: servicePackages, loading: packagesLoading, error: packagesError } = useLiveQuery(
    `*[_type == "servicePackage"] | order(order asc) {
      _id,
      name,
      startingPrice,
      description,
      features,
      idealFor,
      order
    }`,
    {},
    []
  );

  const { data: addOns, loading: addOnsLoading, error: addOnsError } = useLiveQuery(
    `*[_type == "addOn"] | order(order asc) {
      _id,
      name,
      category,
      priceMin,
      priceMax,
      description,
      features,
      order
    }`,
    {},
    []
  );

  const { data: hourlyServices, loading: hourlyLoading, error: hourlyError } = useLiveQuery(
    `*[_type == "hourlyService"] | order(order asc) {
      _id,
      name,
      hourlyRate,
      description,
      order
    }`,
    {},
    []
  );

  const loading = packagesLoading || addOnsLoading || hourlyLoading;
  const error = packagesError || addOnsError || hourlyError;

  useEffect(() => {
    if (!loading) {
      setTimeout(() => { setIsLoading(false) }, 3000);
    }
  }, [loading, setIsLoading]);

  // Group add-ons by category
  const groupedAddOns = (addOns || []).reduce((acc, addon) => {
    if (!acc[addon.category]) {
      acc[addon.category] = [];
    }
    acc[addon.category].push(addon);
    return acc;
  }, {});

  const categoryLabels = {
    cms: 'CMS & Content',
    ecommerce: 'E-Commerce',
    seo: 'SEO',
    custom: 'Custom Features',
    integrations: 'Integrations'
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bground">
        <div className="text-center max-w-md">
          <p className="text-red-400 mb-4">Failed to load services. Please try again later.</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/80 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Services | Buildtech Systems - Web Development & Tech Consulting</title>
        <meta
          name="title"
          content="Services | Buildtech Systems - Web Development & Tech Consulting"
        />
        <meta
          name="description"
          content="Professional web development services in Texas. Custom websites, mobile apps, e-commerce solutions, and tech consulting. Fixed packages or hourly rates available."
        />
        <meta
          name="keywords"
          content="web development services, custom websites, mobile app development, tech consulting Texas, e-commerce websites, website packages, web design pricing"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.buildtechsys.com/services" />
        <meta
          property="og:title"
          content="Services | Buildtech Systems"
        />
        <meta
          property="og:description"
          content="Professional web development and tech consulting services. Custom solutions tailored to your business needs."
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.buildtechsys.com/services" />
        <meta
          property="twitter:title"
          content="Services | Buildtech Systems"
        />
        <meta
          property="twitter:description"
          content="Professional web development and tech consulting services in Texas."
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.buildtechsys.com/services" />
      </Helmet>

      {!isLoading && (
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
            <h1 className="max-w-lg text-pretty text-4xl font-semibold tracking-tight text-text sm:text-5xl">
              Our Services
            </h1>
            {/* <p className="mt-4 text-lg text-gray-400 max-w-2xl">
              Professional web development and tech consulting services tailored to your business needs
            </p>*/}

            {/* Service Packages Section */}
            {servicePackages && servicePackages.length > 0 && (
              <div className="mt-16">
                <h2 className="text-3xl font-semibold text-text mb-2 inline-flex items-center">
                  <Package weight="duotone" size={32} className="text-accent mr-2" />
                  Website Packages
                </h2>
                <p className="text-gray-400 mb-8">Fixed-price packages for complete website solutions</p>
                
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {servicePackages.map((pkg) => (
                    <div
                      key={pkg._id}
                      className="overflow-hidden rounded-lg bg-primary/10 ring-1 ring-white/15 hover:ring-accent/50 transition-all duration-300 flex flex-col"
                    >
                      <div className="p-8 flex flex-col flex-grow">
                        <h3 className="text-xl font-semibold text-white">{pkg.name}</h3>
                        <p className="mt-4 text-3xl font-bold text-accent">
                          ${pkg.startingPrice.toLocaleString()}
                          <span className="text-base font-normal text-gray-400"> starting</span>
                        </p>
                        
                        {pkg.idealFor && (
                          <p className="mt-4 text-sm text-gray-300 italic">
                            Ideal for: {pkg.idealFor}
                          </p>
                        )}

                        <p className="mt-4 text-gray-400">{pkg.description}</p>
                        <div className='pb-8'>
                        {pkg.features && pkg.features.length > 0 && (
                          <ul className="mt-6 space-y-3">
                            {pkg.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                                <CheckCircle weight="fill" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        </div>
                        <a
                          href="/contact"
                          className="mt-auto inline-flex items-center gap-2 bg-accent hover:bg-accent/80 text-black font-semibold px-6 py-3 rounded-lg transition-colors w-full justify-center"
                        >
                          Get Started
                          <ArrowRight weight="bold" size={16} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Add-Ons Section */}
            {Object.keys(groupedAddOns).length > 0 && (
              <div className="mt-20">
                <h2 className="text-3xl font-semibold text-text mb-2 inline-flex items-center">
                  <PuzzlePiece weight="duotone" size={32} className="text-accent mr-2" />
                  Add-On Services
                </h2>
                <p className="text-gray-400 mb-8">Enhance your website with additional features <br></br>*monthly pricing</p>

                {Object.entries(groupedAddOns).map(([category, addons]) => (
                  <div key={category} className="mb-10">
                    <h3 className="text-xl font-semibold text-white mb-4">{categoryLabels[category]}</h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {addons.map((addon) => (
                        <div
                          key={addon._id}
                          className="overflow-hidden rounded-lg bg-primary/10 ring-1 ring-white/15 p-6 hover:ring-accent/50 transition-all duration-300"
                        >
                          <h4 className="text-lg font-semibold text-white">{addon.name}</h4>
                          <p className="mt-2 text-accent font-bold">
                            {addon.priceMax 
                              ? `*$${addon.priceMin.toLocaleString()} - $${addon.priceMax.toLocaleString()}`
                              : `$${addon.priceMin.toLocaleString()}+`
                            }
                          </p>
                          <p className="mt-3 text-sm text-gray-400">{addon.description}</p>
                          
                          {addon.features && addon.features.length > 0 && (
                            <ul className="mt-4 space-y-2">
                              {addon.features.slice(0, 3).map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                                  <CheckCircle weight="fill" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                              {addon.features.length > 3 && (
                                <li className="text-xs text-gray-500 italic">
                                  + {addon.features.length - 3} more features
                                </li>
                              )}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Hourly Services Section */}
            {hourlyServices && hourlyServices.length > 0 && (
              <div className="mt-20">
                <h2 className="text-3xl font-semibold text-text mb-2 inline-flex items-center">
                  <Clock weight="duotone" size={32} className="text-accent mr-2" />
                  Hourly Consulting
                </h2>
                <p className="text-gray-400 mb-8">Flexible hourly rates for ongoing work and consulting</p>
                
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {hourlyServices.map((service) => (
                    <div
                      key={service._id}
                      className="overflow-hidden rounded-lg bg-primary/10 ring-1 ring-white/15 p-6 hover:ring-accent/50 transition-all duration-300"
                    >
                      <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                      <p className="mt-2 text-2xl font-bold text-accent">
                        ${service.hourlyRate}
                        <span className="text-base font-normal text-gray-400">/hour</span>
                      </p>
                      <p className="mt-3 text-sm text-gray-400">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Maintenance Note */}
            <div className="mt-20 p-8 rounded-lg bg-primary/10 ring-1 ring-white/15">
              <h3 className="text-xl font-semibold text-white mb-2">Ongoing Maintenance</h3>
              <p className="text-gray-400">
                Website maintenance and support services are available on a case-by-case basis. 
                Contact us to discuss your specific maintenance needs and we'll create a custom plan that works for you.
              </p>
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center">
              <h2 className="text-3xl font-bold text-text mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with the right technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/80 text-black font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  Schedule a Consultation
                  <ArrowRight weight="bold" size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}