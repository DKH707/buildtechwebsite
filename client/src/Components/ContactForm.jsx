export default function ContactForm() {
  return (
    <div className="mt-14 py-4 px-4 w-full mx-auto max-w-4xl rounded-lg bg-primary/10 ring-1 ring-white/15">
      <form
        className="items-center grid text-left sm:grid-cols-2 gap-y-4"
        action="https://formspree.io/f/xgvljalq"
        method="POST"
      >
        <label className="text-2xl">Your Email:</label>
        <input
          required
          placeholder="google@gmail.com"
          className="text-2xl border bg-bground border-gray-300 rounded-md px-4 py-2"
          type="email"
          name="email"
        />
        <label className="text-2xl">Subject:</label>
        <input
        required
        placeholder="Project Idea"
          className="text-2xl border bg-bground border-gray-300 rounded-md px-4 py-2"
          type="subject"
          name="subject"
        />
        <label className="text-2xl">Message:</label>
        <textarea
          required
          placeholder="Let's build tech together!"
          className="text-2xl border bg-bground border-gray-300 rounded-md px-4 py-2"
          name="message"
        ></textarea>
        <input type="text" name="_gotcha" className="hidden" />
        <div/>
        <button
          className="mx-auto rounded-md bg-secondary px-6 py-2.5 text-md font-semibold text-text shadow-sm hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
          type="submit"
        >
          Send to Derek
        </button>
      </form>
    </div>
  );
}
