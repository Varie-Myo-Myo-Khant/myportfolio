import React from 'react';
import { Helmet } from 'react-helmet';
import favicon from '../assets/img/fav.svg'
import bannerImage from "../assets/img/bannerimg.svg";
function Header() {
  return (
    <div>
      <Helmet>
        <title>Myo Myo's Portfolio</title>
        <meta name="description" content="Myo Myo's Portfolio" />
        <meta name="keywords" content="Portfolio" />
        <meta name="author" content="Myo Myo" />
        <meta name='image' content='{favicon}'/>
        <link rel="icon" href={favicon}/>
        <meta property="og:title" content="Myo Myo's Portfolio" />
        <meta property="og:description" content="Check out my portfolio to know about me!" />
        <meta property="og:image" content={bannerImage} />
        <meta property="og:url" content="https://myomyokhant.vercel.app/" />
        {/* <meta name="twitter:title" content="My Page Title" />
        <meta name="twitter:description" content="This is a description of my page" />
        <meta name="twitter:image" content="https://example.com/image.jpg" />
        <meta name="twitter:card" content="summary_large_image" /> */}
      </Helmet>
      {/* Your component's code here */}
    </div>
  );
}

export default Header;