import Image from "next/image";
import * as motion from "framer-motion/client"
import { Spotlight } from "@/components/ui/spotlight";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <section className="container max-w-6xl mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col items-center space-y-4 mt-20 text-center max-w-4xl">
          <motion.h1
            className="text-balance bg-gradient-to-b from-foreground/10 to-foreground bg-clip-text text-transparent py-6 text-5xl md:text-7xl font-medium leading-none tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            A dynamic graph showcasing stock market trends
          </motion.h1>
          <motion.h2
            className="text-balance text-muted-foreground text-sm md:text-lg max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore interactive supply chain maps and access comprehensive stock analytics to make informed investment decisions.
          </motion.h2>
        </div>

        <motion.div
          className="mt-20 w-full h-full border border-transparent ring-1 ring-ring/10 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* dark placeholder image */}
          <img src="https://placehold.co/600x400/black/white" alt="graph" className="w-full h-full" />
        </motion.div>
      </section>
    </main>
  );
}
