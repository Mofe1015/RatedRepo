import React from 'react';
import '../index.css';

function Header() {
  return (
    <section style={}>
      
    </section>
  );
}

export default Header;

function changeBg(){
  const images = [
    'url(../images/bannerimg.jpg)',
    'url(../images/bannerimg3.jpg)',
    'url(../images/bannerimg2.jpg)',
    'url(../images/bannerimg1.jpg)',

  ]
  const section = document.querySelector('section')
  const bg = images[Math.floor(Math.random() * images.length )];
  section.style.backgroundImage = bg;
}
setInterval(changeBg, 1000)