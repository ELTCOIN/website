import React from 'react';
import Adrian from './images/Adrian.png';
import Oli from './images/Oli.png';
import Ivan from './images/Ivan.png';
import Oliver from './images/Oliver.png';
import Dan from './images/Dan.png';
import Victor from './images/Victor.png';
import Community from './images/Bot.png';

const TEAM_MEMBERS = [
  {
    image: Oliver,
    name: 'Oli H.',
    title: {
      __html: 'Founder &<br/>Developer',
    },
  },
  {
    image: Victor,
    name: 'Victor F.',
    title: {
      __html: 'Head of<br/>Engineering',
    },
  },
  {
    image: Ivan,
    name: 'Ivan S.W.',
    title: {
      __html: 'Head of<br/>Strategy',
    },
  },
  {
    image: Dan,
    name: 'Dan T.',
    title: {
      __html: 'Head of<br/>Design',
    },
  },
  {
    image: Oli,
    name: 'Oli M.',
    title: {
      __html: 'Head of<br/>Mobile',
    },
  },
  {
    image: Adrian,
    name: 'Adrian P.',
    title: {
      __html: 'Head of<br/>Staff',
    },
  },
];

export default () => (
  <div
    className="card container has-text-centered"
    id="team"
    style={{
      padding: '1.5rem',
    }}
  >
    <h1 className="title is-size-2">THE TEAM</h1>
    <p
      className="subtitle"
      style={{
        fontFamily: "'Pacifico', cursive",
      }}
    >
      Entrepreneurs, engineers and eclectics
    </p>
    <br />
    <div className="columns">
      {TEAM_MEMBERS.map(member => (
        <div className="column" key={member.name}>
          <img src={member.image} alt="" width={100} />
          <p className="title is-6">{member.name}</p>
          <p className="subtitle is-7" dangerouslySetInnerHTML={member.title} />
        </div>
      ))}
      <div className="column">
        <a
          href="https://t.me/ELTCOIN"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Community} alt="" width={100} />
          <p className="title is-6">You</p>
          <p className="subtitle is-7">
            We{' '}
            <span role="img" aria-label="love">
              ❤️
            </span>
            <br />Community
          </p>
        </a>
      </div>
    </div>
  </div>
);
