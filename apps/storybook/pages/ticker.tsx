import { CustomTicker } from 'libs/storybook-components/src/lib/custom-ticker';
import { useEffect, useRef, useState } from 'react';

export default function Ticker() {
  // state text
  const [text, setText] = useState('Very butiful blok');
const inputRef = useRef(null)
// state string setstring
const [string, setString] = useState('')

  useEffect(()=>{
    // log text
    console.log(text);
  },[text])

  return (
    <div className="flex flex-col w-[100%]  p-2 m-2 overflow-hidden">
      {/* input onhange settext */}
      {/* <div>
      <input type="text" value={text} ref={inputRef} value={string} onChange={(e)=> setString(e.target.value)}/>
      <button onClick={()=> setText(inputRef.current.value)}>set</button>
      </div> */}
      <div className='relative overflow-hidden  p-2 m-2  h-[100%]  '>
        <div className='text-8xl text-cyan-900'>main content</div>
        <div className='text-8xl text-cyan-800'>main content</div>
        <div className='text-8xl text-cyan-700'>main content</div>
        <div className='text-8xl text-cyan-600'>main content</div>
        <div className='text-8xl text-cyan-500'>main content</div>
        <div className='text-8xl text-cyan-400'>main content</div>
        <div className='text-8xl text-cyan-300'>main content</div>
        <div className='text-8xl text-cyan-200'>main content</div>
        <CustomTicker text={text} />
      </div>
    </div>
  );
}
