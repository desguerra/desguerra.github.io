import React from 'react';

function Hero() {

  return (
    <section className='hero flex flex-col justify-center text-center py-12'>
      <h1>hi, i'm <span className='ol-black'>nikki</span>!</h1>

      <div className='p-3'>
        <button className='btn btn-light'>resume</button>
      </div>
    </section>
  );
}

export default Hero;