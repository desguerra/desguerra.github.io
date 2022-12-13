import React from 'react';
import Project from '../Project';

function Portfolio() {

  return (
    <section className='portfolio flex flex-col justify-center text-center p-12'>

      <h2>web development projects</h2>

      <div className='flex flex-wrap justify-center p-2'>
        <Project />
        <Project />
        <Project />
      </div>

      <h2>passion projects</h2>

      <div className='flex flex-wrap justify-center p-2'>
        <Project />
        <Project />
        <Project />
      </div>

    </section>
  );
}

export default Portfolio;