import "./App.css";
import { Question } from "./Question";
function App() {
  return (
    <main className="container">
      <div style={{ paddingTop: "1rem" }}>
        <h2 style={{ position: "sticky", top: "0", bottom: "0" }}>
          Question and answer about login in
        </h2>
      </div>
      <Question />
    </main>
  );
}
export default App;
