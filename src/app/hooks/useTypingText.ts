import { useEffect, useState } from "react";

export function useTypingText(text: string, speed = 100) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));

      index++;

      if (index > text.length) {
        index = 0;
        setDisplayText("");
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayText;
}
