import React, { useState } from 'react';

function ProjectsPassion() {

  const [projects] = useState([
    {
      title: 'tangyy adventure game',
      deployedURL: 'https://desguerra.github.io/',
      btnDesc: 'play here!',
      githubURL: 'https://github.com/desguerra/desguerra.github.io',
      description: 'made with',
      img: 'portfolio'
    },
    {
      title: 'stardew valley mod',
      deployedURL: 'https://desguerra.github.io/',
      btnDesc: 'mod download page',
      githubURL: 'https://github.com/desguerra/desguerra.github.io',
      description: 'coming soon :)',
      img: 'portfolio'
    },
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
              {x.btnDesc}
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

export default ProjectsPassion;