import React, { useState } from "react";

export const Button = () => {
  const [value, setValue] = useState(0);
  return (
    <button type="button" onClick={() => setValue((prev) => prev + 1)}>
      Remote button: {value}
    </button>
  );
};
