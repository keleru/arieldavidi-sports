import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  open: boolean;
  close: () => void;
}

export default function SideMenu({ open, close }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="overlay"
          />
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ duration: 0.3 }}
            className="sidemenu"
          >
            <button onClick={close}>✕</button>
            <Link to="/" onClick={close}>Home</Link>
            <Link to="/gallery" onClick={close}>Gallery</Link>
            <Link to="/about" onClick={close}>About</Link>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

