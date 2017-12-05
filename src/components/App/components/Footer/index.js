import React from 'react';
import communitySticker from './images/community.png';
import './index.css';

const SOCIAL_ICONS = [
  {
    link: 'https://www.youtube.com/channel/UCCpJqoXegl501zfHevtTilQ',
    className: 'fa-youtube-play',
  },
  {
    link: 'https://github.com/eltcoin',
    className: 'fa-github',
  },
  {
    link: 'https://www.facebook.com/eltcoin.community',
    className: 'fa-facebook',
  },
  {
    link: 'https://t.me/ELTCOIN',
    className: 'fa-telegram',
  },
  {
    link: 'https://twitter.com/officialELTCoin',
    className: 'fa-twitter',
  },
  {
    link: 'https://bitcointalk.org/index.php?topic=2425069',
    className: 'fa-bitcoin',
  },
  {
    link: 'https://medium.com/@officialELTCoin',
    className: 'fa-medium',
  },
];

export default () => (
  <footer
    style={{
      background: 'radial-gradient(circle, #000000, #500d33)',
      backgroundSize: '100% 200%',
      padding: '1.5rem',
    }}
  >
    <div className="container has-text-white has-text-weight-bold">
      <p className="is-size-3">JOIN OUR COMMUNITY</p>
      <p className="has-text-weight-light">
        Stay up to date with progress and updates.
      </p>
      <a
        href="https://twitter.com/home?status=I%20love%20%40officialELTCoin!%20%23eltcoin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="community-sticker"
          src={communitySticker}
          alt=""
          width={100}
          style={{ position: 'absolute', right: '0', top: '0' }}
        />
      </a>

      <br />
      <p className="is-size-5">
        {SOCIAL_ICONS.map(icon => (
          <a
            className="is-medium"
            href={icon.link}
            key={icon.className}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: '.5rem' }}
          >
            <span className="fa-stack">
              <i className="fa fa-circle fa-stack-2x fa-inverse" />
              <i className={`fa ${icon.className} fa-stack-1x`} />
            </span>
          </a>
        ))}
      </p>
    </div>
    <br />
  </footer>
);
