import { useState } from 'react';

const App = () => {
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 200); // Reset animation class after the animation duration

  };

  return (
    <div className='relative w-full h-dvh bg-red flex items-center justify-center'>
      <div className={` opacity-0 flex items-center justify-center coin w-[13vmin] aspect-square rounded-full bg-yellow border-[1.5vmin] border-black absolute z-0 -translate-y-[25vmin] ${
          animate ? ' animate-appear' : ''
        }`}>
        <span className='aspect-[1/2] border-[1vmin] border-black h-[60%]'></span>
      </div>
      <button
        className={`relative overflow-hidden w-[30vmin] aspect-square bg-yellow rounded-3xl border-[1.5vmin] border-black flex items-center justify-center ${
          animate ? ' animate-click' : ''
        }`}
        onClick={handleClick}
      >
        <span className='absolute w-[1.5vmin] h-full bg-black z-0'></span>
        <span className='relative w-full h-1/3 shadow-[0_0_0_1.5vmin_black] bg-yellow z-10 flex items-center justify-around'>
          <span className='w-[1.5vmin] h-full bg-black'></span>
          <span className='w-[1.5vmin] h-full bg-black'></span>
        </span>
      </button>
    </div>
  );
};

export default App;
