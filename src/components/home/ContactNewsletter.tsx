"use client"
export default function ContactNewsletter() {
  return (
    <section className="py-20">
      <div className="items-center gap-12 grid lg:grid-cols-2 mx-auto px-6 max-w-6xl">
        
        {/* Left Content */}
        <div>
          <h2 className="mb-4 font-bold text-gray-900 dark:text-white text-4xl">
            Stay Updated — <span className="text-indigo-600">Join Our Newsletter</span>
          </h2>
          <p className="mb-8 text-gray-600 dark:text-gray-400">
            Get the latest updates on classes, study materials, and special offers — directly in your inbox.
          </p>

          <div className="flex items-center gap-3 bg-white dark:bg-gray-800 shadow-lg p-3 border border-gray-100 dark:border-gray-700 rounded-xl">
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-1 bg-transparent outline-none text-gray-800 dark:text-gray-200"
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl text-white transition-all">
              Subscribe
            </button>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="bg-white dark:bg-gray-800 shadow-xl p-8 border border-gray-100 dark:border-gray-700 rounded-2xl">
          <h3 className="mb-4 font-semibold text-gray-900 dark:text-white text-2xl">Send Us a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-gray-100 dark:bg-gray-900 px-4 py-3 border focus:border-indigo-500 border-transparent rounded-xl outline-none w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-gray-100 dark:bg-gray-900 px-4 py-3 border focus:border-indigo-500 border-transparent rounded-xl outline-none w-full"
            />
            <textarea
              placeholder="Your Message"
              className="bg-gray-100 dark:bg-gray-900 px-4 py-3 border focus:border-indigo-500 border-transparent rounded-xl outline-none w-full"
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 py-3 rounded-xl w-full font-semibold text-white transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
