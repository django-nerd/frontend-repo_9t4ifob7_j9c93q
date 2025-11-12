import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">About</h2>
            <p className="mt-2 text-gray-600">Minimal words, maximal impact</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="md:col-span-2"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700">
                I blend visual design, motion, and code to craft joyful experiences. I value clarity, rhythm, and daring color.
              </p>
              <p className="text-gray-700">
                Tools I love: Figma, WebGL, React, Three/Spline, Framer Motion. Always exploring curious interfaces and tiny delightful details.
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {["Visual Design", "Creative Dev", "Motion"].map((s, i) => (
                <div key={s} className="rounded-xl border border-gray-200 bg-white p-4">
                  <p className="text-sm text-gray-500">Specialty</p>
                  <p className="font-semibold text-gray-900">{s}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
