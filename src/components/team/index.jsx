import React, { useState } from 'react';
import teamPhoto from '../../assets/team_photo.png';
import githubIcon from '../../assets/team_icons/github.png';
import linkedinIcon from '../../assets/team_icons/linkedin.png';
import instagramIcon from '../../assets/team_icons/instagram.png';
import facebookIcon from '../../assets/team_icons/facebook.png';
import TeamButton from './TeamButton';
import project1 from '../../assets/projects/1.png';
import project2 from '../../assets/projects/2.png';
import project3 from '../../assets/projects/3.png';
import project4 from '../../assets/projects/4.png';
import project5 from '../../assets/projects/5.png';
import project6 from '../../assets/projects/6.png';

const Team = () => {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div className="px-7 md:px-[106px] mb-36">
      <section className="flex flex-col items-center md:flex-row gap-5">
        <img src={teamPhoto} alt="team member picture" className="w-36 md:w-64 h-auto" />
        <div className="flex flex-col justify-around items-center lg:items-start gap-3">
          <h3 className="text-nameMember-0 text-sizeTitle">Hernando Matias</h3>
          <span className="text-white text-sizeParagraph">Frontend Designer</span>
          <ul className="flex gap-5 mb-2">
            <li>
              <a href="https://www.github.com" target={'_blank'} rel="noopener noreferrer" alt='github icon'>
                <img src={githubIcon} alt="Github" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target={'_blank'} rel="noopener noreferrer" alt='linkedin icon'>
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target={'_blank'} rel="noopener noreferrer" alt='instagram icon'>
                <img src={instagramIcon} alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com" target={'_blank'} rel="noopener noreferrer" alt='facebook icon'>
                <img src={facebookIcon} alt="Facebook" />
              </a>
            </li>
          </ul>
          <p className="text-white text-sizeParagraphSm mb-2">
            Essa é uma pequena descrição sobre essa pessoa, aqui não existe nenhum texto relevante é apenas para preencher espaço ok <br />
            Essa é uma pequena descrição sobre essa pessoa, aqui não existe nenhum te
          </p>
        </div>
      </section>

      <section className="my-14">
        <div className="flex gap-3">
          <button onClick={() => setShowProjects(!showProjects)}>
            <TeamButton text="Projetos recentes" />
          </button>
          <TeamButton text="Habilidades" />
        </div>

        <div className={`${showProjects ? 'grid' : 'hidden'} grid-cols-1 gap-5 self-center mt-10 md:hidden`}>
          <img src={project1} alt="Project 1" className="w-full md:w-auto" />
          <img src={project2} alt="Project 2" className="w-full md:w-auto" />
          <img src={project3} alt="Project 3" className="w-full md:w-auto" />
          <img src={project4} alt="Project 4" className="w-full md:w-auto" />
          <img src={project5} alt="Project 5" className="w-full md:w-auto" />
          <img src={project6} alt="Project 6" className="w-full md:w-auto" />
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-7 mt-10">
          <img src={project1} alt="Project 1" />
          <img src={project2} alt="Project 2" />
          <img src={project3} alt="Project 3" />
          <img src={project4} alt="Project 4" />
          <img src={project5} alt="Project 5" />
          <img src={project6} alt="Project 6" />
        </div>
      </section>
    </div>
  );
}

export default Team;
