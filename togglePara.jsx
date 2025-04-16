import  { useState } from "react";

export function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      {isVisible && <p>This is a visible paragraph.</p>}
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
    </div>
  );
}

