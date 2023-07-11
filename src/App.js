import "./styles.css";
import { Suspense, useState } from "react";
import { LoaderIcon } from "./LoaderIcon";

// Ported from https://codepen.io/popmotion/pen/oNGxjpr?editors=1111
export default function App() {
  const [active, setActive] = useState(false);

  return (
    <Suspense fallback={null}>
      {/* EXAMPLE USAGE, It must be coveredin a suspense component to load it correctly */}
      <LoaderIcon isActive={active} path="/star-icon.glb" size={3} hue={1} />
      <button onClick={() => setActive(!active)}>click</button>
    </Suspense>
  );
}
