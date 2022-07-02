import { CustomTicker } from    '@storybook/components';
import { useState } from 'react';

export default function Ticker() {
  // state text
  const [text, setText] = useState('Hello World');

  return (
    <>
      {/* input onhange settext */}
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <CustomTicker text={text} />
    </>
  );
}
