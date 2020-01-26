import * as React from "react";
import * as emoji from "node-emoji";

interface Props {
  text: string;
  onClick?: () => void;
}

export default function AddButton({ text, onClick }: Props) {
  return (
    <button
      className="btn-small btn-secondary"
      style={{ marginBottom: "1rem", marginTop: "-3rem" }}
      onClick={onClick}
    >
      {emoji.get("heavy_plus_sign")}{' '}{text}
    </button>
  );
}
