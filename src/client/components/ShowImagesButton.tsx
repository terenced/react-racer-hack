import * as React from "react";
import * as emoji from "node-emoji";

interface Props {
  isShowing: boolean;
  onClick?: () => void;
}

export default function ShowImageButton({ isShowing, onClick }: Props) {
  const icon = React.useMemo(
    () => (isShowing ? emoji.get("see_no_evil") : emoji.get("heart_eyes") ),
    [isShowing]
  );

  const text = React.useMemo(
    () => (isShowing ? "Hide Images" : "Show Images"),
    [isShowing]
  );

  const btnClass = React.useMemo(
    () => (isShowing ? "btn-danger" : "btn-secondary"),
    [isShowing]
  );
  return (
    <button
      className={`btn-small ${btnClass}`}
      style={{ marginBottom: "1rem", marginTop: "-3rem" }}
      onClick={onClick}
    >
      {icon}{' '}{text}
    </button>
  );
}
