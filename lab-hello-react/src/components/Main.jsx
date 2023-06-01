import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

export default function Main() {
  return (
    <main>
      <section className="section-wrapper">
        <article className="article-item">
          <img src={icon1}></img>
          <h2>Declarative</h2>
          <p>React makes it painles to create intereactive UIs.</p>
        </article>
        <article className="article-item">
          <img src={icon2}></img>
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </article>
        <article className="article-item">
          <img src={icon3}></img>
          <h2>Single-Way</h2>
          <p>A set ot immutable values are passed to the the component's.</p>
        </article>
        <article className="article-item">
          <img src={icon4}></img>
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </article>
      </section>
    </main>
  );
}
