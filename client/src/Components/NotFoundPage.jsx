import React, { useEffect } from "react";
import { useLoadingContext } from '../helpers/LoadingContext';

export default function NotFoundPage() {
  const { setIsLoading } = useLoadingContext();

  useEffect(() => {
    setTimeout(() => { setIsLoading(false) }, 3000)
  }, [setIsLoading])

  return (
    <div className="isolate min-h-full">
      <img
        alt=""
        src="/coffee.jpg"
        className="absolute inset-0 -z-10 size-full object-top object-cover"
      />
      <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
        <p className="text-5xl font-semibold text-text">404</p>
        <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-pretty text-lg font-medium text-white/90 sm:text-xl/8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="mt-10 flex justify-center">
          <a href="/" className="text-sm/7 font-semibold text-white">
            <span aria-hidden="true">&larr;</span> Back to home
          </a>
        </div>
      </div>
    </div>
  )
}
