import "./App.css";
import { Review } from "./review";

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Reviews</h2>
          <div className="underline"></div>
        </div>
        <div>
          <Review />
        </div>
      </section>
    </main>
  );
}
export default App;
