import "./styles.css";
import CallApi from "./CallApi";

export default function App() {
  return (
    <main role="region" aria-labelledby="countries" className="App">
      <h1 id="countries">Countries</h1>
      <CallApi />
    </main>
  );
}
