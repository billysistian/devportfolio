import { useTypingText } from "../hooks/useTypingText";

type Props = {
  text: string;
};

export function TypingText({ text }: Props) {
  const displayText = useTypingText(text);

  return (
    <span className="text-blue-600">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
