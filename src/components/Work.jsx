import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Neon Threads',
    tags: ['Brand', 'Web'],
    color: 'from-fuchsia-500 to-rose-500',
    image: 'https://images.unsplash.com/photo-1573761449626-1b80629dafc3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZW9uJTIwVGhyZWFkc3xlbnwwfDB8fHwxNzYyOTQ1NzM1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Soft Geometry',
    tags: ['3D', 'Motion'],
    color: 'from-violet-500 to-sky-500',
    image: 'https://images.unsplash.com/photo-1628313388780-fb046760ef1a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTb2Z0JTIwR2VvbWV0cnl8ZW58MHwwfHx8MTc2Mjk0NTczNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Mono Studio',
    tags: ['UI', 'App'],
    color: 'from-emerald-500 to-teal-500',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function Work() {
  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Selected Work</h2>
            <p className="text-gray-600 mt-2">A few favorites blending aesthetics and engineering</p>
          </div>
          <div className="hidden md:flex items-center gap-3 text-sm text-gray-600">
            <span>Drag</span>
            <span className="inline-block h-3 w-3 rounded-full bg-gradient-to-br from-fuchsia-500 to-sky-500 animate-pulse" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-gray-100"
            >
              <img src={p.image} alt={p.title} className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className={`inline-flex items-center rounded-full bg-gradient-to-r ${p.color} text-white px-3 py-1 text-xs font-medium shadow`}>{p.tags.join(' • ')}</div>
                <h3 className="mt-3 text-white text-xl font-semibold">{p.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
