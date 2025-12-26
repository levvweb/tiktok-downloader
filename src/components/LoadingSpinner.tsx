import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center py-8">
      <motion.div
        className="h-10 w-10 rounded-full border-4 border-muted border-t-primary"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default LoadingSpinner;
