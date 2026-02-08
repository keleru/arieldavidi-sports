import me from "../assets/me.jpeg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="px-6 max-w-5xl mx-auto pb-20">
      <h1 className="title">About Me</h1>

      <div className="about-grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="about-img-container"
        >
          <img src={me} className="about-img" alt="Ariel Davidi" />
        </motion.div>

        <div className="about-text">
          <h1>
            שלום שמי אריאל דוידי ואני מעצב וידיו וגרפי
          </h1>
          <p>
עם למעלה משנתיים ניסיון, אני מתמחה ביצירת עיצובים וסרטונים דינמיים ויפים עבור קבוצות ספורט וספורטאים. ספורט הוא התשוקה שלי מילדות ואני מביא את האנרגיה הזו לכל פרויקט, ויוצר ויזואליה שמעוררת השראה ומשפרת ביצועים.          </p>
          
        </div>
      </div>
    </div>
  );
}
