import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex items-center justify-center py-6 md:py-8"
    >
      <h1 className="text-2xl font-bold text-foreground md:text-3xl">
        TikTok <span className="text-primary">Downloader</span>
      </h1>
    </motion.header>
  );
};

export default Header;
