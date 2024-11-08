import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import * as motion from "framer-motion/client"

export default function Header() {
  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container max-w-6xl mx-auto flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={32}
            height={32}
          />
          <span className="font-extrabold text-2xl">Catena AI</span>
        </Link>

        {/* Right side button */}
        <Button
          size="sm"
        >
          Get Started
        </Button>
      </div>
    </motion.header>
  );
}
