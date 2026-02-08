import { useState } from "react";
import works from "../data/works";

export default function Gallery() {
  const [modalImg, setModalImg] = useState<string | null>(null);

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">גלריה</h1>
        <div className="grid">
          {works.map((w) => (
            <div key={w.id} className="card" onClick={() => setModalImg(w.image)}>
              <img src={w.image} alt={`Work ${w.id}`} />
            </div>
          ))}
        </div>
      </div>

      {modalImg && (
        <div className="modal" onClick={() => setModalImg(null)}>
          <img src={modalImg} alt="Full view" />
        </div>
      )}
    </section>
  );
}
