import React from 'react';

function About() {

  return (
    <section className='about flex flex-col justify-center py-12 px-32'>
      <h2 className='dark'>who am I?</h2>

      <div>
        <p>
          Hello, I'm <span className='strong'>Nikki</span>!
        </p>
        <p>
          I am a <span className='strong'>Full-stack Web Developer</span> with a <span className='strong'>Bachelor of Science degree</span> in <span className='strong'>Electrical Engineering</span> and a <span className='strong'>certificate</span> in <span className='strong'>Full-Stack Web Development</span> from the <span className='strong'>University of California, Davis</span>.
        </p>
        <p>
          During my free time, you can catch me obsessing over <span className='strong'>video games</span>, <span className='strong'>skincare</span>, and <span className='strong'>mechanical keyboards</span>.
        </p>
      </div>
    </section>
  );
}

export default About;