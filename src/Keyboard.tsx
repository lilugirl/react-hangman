import styles from "./keyboard.module.css";
const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyBoardProps = {
disabled:boolean
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};
export function Keyboard({
  disabled,
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
}: KeyBoardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(75px,1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map((key) => {
        const isActive=activeLetters.includes(key)
        const isInactive=inactiveLetters.includes(key)
        return (
          <button disabled={disabled || isActive || isInactive} onClick={()=>addGuessedLetter(key)} className={`${styles.btn} ${isActive?styles.active:''} ${isInactive?styles.inactive:''}`} key={key}>
            {key}
          </button>
        );
      })}
    </div>
  );
}
