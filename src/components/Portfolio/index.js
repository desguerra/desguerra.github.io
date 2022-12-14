import React from 'react';
import ProjectsWeb from '../ProjectsWeb';
import ProjectsPassion from '../ProjectsPassion';

function Portfolio() {

  return (
    <section className='portfolio flex flex-col justify-center text-center p-12'>

      <h2>web development projects</h2>

      <div className='flex flex-wrap justify-center text-center p-2'>
        <ProjectsWeb />
      </div>

      <h2>passion projects</h2>

      <div className='flex flex-wrap justify-center text-center p-2'>
        <ProjectsPassion />
      </div>

    </section>
  );
}

export default Portfolio;