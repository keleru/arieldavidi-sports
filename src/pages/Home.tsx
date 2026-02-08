import video from "../assets/hero-video.mp4"; // локальное видео
import side1 from "../assets/works/2.jpeg";
import side2 from "../assets/works/6.jpeg";

export default function Home() {

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-content">
          <h1>עיצוב ספורטיבי מעורר השראה</h1>
          <p>
אני אריאל ופה אתה יכול לראות את כל מה שאני השקעתי בו          </p>

          <div className="hero-media">
            {/* Левая картинка */}
            <img src={side1} alt="Side 1" className="hero-side" />

            {/* Локальное видео */}
            <video
              src={video}
              autoPlay
              loop
              muted
              className="hero-video"
            ></video>

            {/* Правая картинка */}
            <img src={side2} alt="Side 2" className="hero-side" />
          </div>
        </div>
      </section>

      {/* FEATURED */}
     
    </>
  );
}
