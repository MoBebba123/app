import { motion } from "framer-motion";
import { tokens } from "./components/ThemeProvider/theme";
import { msToNum } from "./utils/style";

const transition = (OgComponent) => {
  return () => (
    <>
      <motion.div
        className="main-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{
          type: "tween",
          ease: "linear",
          duration: msToNum(tokens.base.durationS) / 1000,
          delay: 0.1,
        }}
      >
        <OgComponent />
      </motion.div>
      {/* <motion.div
        className="slide-in"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      /> */}
    </>
  );
};
export default transition;
