import React, { useState } from 'react';

export interface CountProps {
  initialValue?: number;
}

export const Count = (props: CountProps) => {
  const { initialValue = 0 } = props;
  const [count, setCount] = useState(initialValue);
  const onClick = () => setCount((p) => p + 1);

  return (
    <button type="button" onClick={onClick}>
      {count}
    </button>
  );
};
