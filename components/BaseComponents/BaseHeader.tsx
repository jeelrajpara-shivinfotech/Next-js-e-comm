"use client"
import { motion } from "framer-motion";

export default function BaseAnimatedHeading({ title }: { title: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-4xl text-center font-medium font-jost"
    >
      {title}
    </motion.h2>
  );
}
