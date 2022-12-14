import React, { useState } from 'react';

function ProjectsWeb() {

  const [projects] = useState([
    {
      title: 'personal portfolio',
      deployedURL: 'https://desguerra.github.io/',
      githubURL: 'https://github.com/desguerra/desguerra.github.io',
      description: 'made with React JS and Tailwind CSS',
      img: 'portfolio'
    },
    {
      title: 'music market',
      deployedURL: 'https://desguerra.github.io/',
      githubURL: 'https://github.com/desguerra/desguerra.github.io',
      description: 'made with',
      img: 'portfolio'
    },
    {
      title: 'the tech blog',
      deployedURL: 'https://desguerra.github.io/',
      githubURL: 'https://github.com/desguerra/desguerra.github.io',
      description: 'made with',
      img: 'portfolio'
    }
  ]);

  return (
    <div className='flex flex-wrap justify-center'>
      {projects.map((x) => (
        <article className='flex flex-col justify-center p-3 text-center'>
          <div>
            <img
              src={require(`../../assets/thumbnails/${x.img}.png`)}
              alt={`${x.title} thumbnail`}
              width='350px'
              key={x.title}
            />
          </div>
          <h4 className='dark'>
            {x.title}
          </h4>
          <p className='dark'>
            {x.description}
          </p>
          <div className='my-4'>
            <a href={x.deployedURL} target='_blank' rel='noreferrer' className='btn btn-dark'>
              live URL
            </a>
          </div>
          <div className='my-4'>
            <a href={x.githubURL} target='_blank' rel='noreferrer' className='btn btn-medium'>
              github code
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ProjectsWeb;