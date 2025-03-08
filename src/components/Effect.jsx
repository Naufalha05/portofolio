import { motion } from "framer-motion";

export default function Effect() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="p-6 bg-blue-500 text-white text-center rounded-lg shadow-lg"
    >
    </motion.div>
  );
}
