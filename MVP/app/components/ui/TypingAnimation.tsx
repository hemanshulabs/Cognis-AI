"use client";

import {
  ElementType,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";

type CursorStyle = "line" | "block" | "underscore";

type TypingAnimationProps = {
  children?: string;
  words?: string[];
  className?: string;
  duration?: number;
  typeSpeed?: number;
  deleteSpeed?: number;
  delay?: number;
  pauseDelay?: number;
  loop?: boolean;
  as?: ElementType;
  startOnView?: boolean;
  showCursor?: boolean;
  blinkCursor?: boolean;
  cursorStyle?: CursorStyle;
  style?: CSSProperties;
};

const cursorGlyph: Record<CursorStyle, string> = {
  line: "|",
  block: "█",
  underscore: "_",
};

export function TypingAnimation({
  children,
  words,
  className,
  duration = 100,
  typeSpeed,
  deleteSpeed = 50,
  delay = 0,
  pauseDelay = 1000,
  loop = false,
  as: Component = "span",
  startOnView = true,
  showCursor = true,
  blinkCursor = true,
  cursorStyle = "line",
  style,
}: TypingAnimationProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [hasStarted, setHasStarted] = useState(!startOnView);
  const [displayedText, setDisplayedText] = useState("");
  const sourceWords = useMemo(() => {
    if (words?.length) return words;
    return children ? [children] : [""];
  }, [children, words]);

  useEffect(() => {
    if (!startOnView || hasStarted || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted, startOnView]);

  useEffect(() => {
    if (!hasStarted) return;

    let timeoutId: ReturnType<typeof setTimeout>;
    let isCancelled = false;
    const speed = typeSpeed ?? duration;

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timeoutId = setTimeout(resolve, ms);
      });

    const typeWord = async (word: string) => {
      for (let index = 1; index <= word.length; index += 1) {
        if (isCancelled) return;
        setDisplayedText(word.slice(0, index));
        await wait(speed);
      }
    };

    const deleteWord = async (word: string) => {
      for (let index = word.length - 1; index >= 0; index -= 1) {
        if (isCancelled) return;
        setDisplayedText(word.slice(0, index));
        await wait(deleteSpeed);
      }
    };

    const run = async () => {
      await wait(delay);

      do {
        for (let wordIndex = 0; wordIndex < sourceWords.length; wordIndex += 1) {
          const word = sourceWords[wordIndex];
          await typeWord(word);
          if (isCancelled) return;
          await wait(pauseDelay);

          const shouldDelete = loop || wordIndex < sourceWords.length - 1;
          if (shouldDelete) {
            await deleteWord(word);
          }
        }
      } while (loop && !isCancelled);
    };

    void run();

    return () => {
      isCancelled = true;
      clearTimeout(timeoutId);
    };
  }, [
    delay,
    deleteSpeed,
    duration,
    hasStarted,
    loop,
    pauseDelay,
    sourceWords,
    typeSpeed,
  ]);

  return (
    <Component ref={ref} className={className} style={style}>
      {displayedText}
      {showCursor ? (
        <span
          aria-hidden="true"
          className={blinkCursor ? "typing-animation-cursor" : undefined}
        >
          {cursorGlyph[cursorStyle]}
        </span>
      ) : null}
    </Component>
  );
}
