"use client"

import React, { useState, useEffect } from 'react'
import Image from "next/image"

const HomePage = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > window.innerHeight) { // if scroll down hide the navbar
        setShow(false);
      } else { // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div>
      <div className="splashPage w-full h-screen">
        <div className='homePage'>
          <div className="flex flex-row title">
            <span className="title1Start R" style={{ '--i': '1' } as React.CSSProperties}>R</span>
            <span className="title1 O" style={{ '--i': '2' } as React.CSSProperties}>O</span>
            <span className="title1 Y" style={{ '--i': '3' } as React.CSSProperties}>Y</span>
            <span className="title1" style={{ '--i': '4' } as React.CSSProperties}>&nbsp;</span>
            <span className="title1" style={{ '--i': '5' } as React.CSSProperties}>H</span>
            <span className="title1" style={{ '--i': '6' } as React.CSSProperties}>A</span>
            <span className="title1" style={{ '--i': '7' } as React.CSSProperties}>R</span>
            <span className="title1" style={{ '--i': '8' } as React.CSSProperties}>G</span>
            <span className="title2" style={{ '--i': '9' } as React.CSSProperties}>R</span>
            <span className="title2" style={{ '--i': '10' } as React.CSSProperties}>A</span>
            <span className="title2" style={{ '--i': '11' } as React.CSSProperties}>V</span>
            <span className="title2End" style={{ '--i': '12' } as React.CSSProperties}>E</span>
            <span className="splashPageMenu" style={{ '--i': '13' } as React.CSSProperties}>
              <div className="splashPageMenuBar"></div>
              <div className="splashPageMenuBar"></div>
              <div className="splashPageMenuBar"></div>
            </span>
          </div>
        </div>
        <h2 className="subtitle">PORTFOLIO</h2>
      </div>
      <main id="overview">
        <div className={`active ${show && 'hidden'}`}>
          <div className="stickyBar grid grid-rows-1 grid-flow-col gap-4 w-full">
            <div className='flex items-center'>
              <div className='profilePic'></div>
              <div className='profilePicName justify-self-start ali'>ROY HARGRAVE</div>
            </div>
            <div className='menuBar justify-self-end'>
              <div className="stickyBarMenuPage"></div>
              <div className="stickyBarMenuPage"></div>
              <div className="stickyBarMenuPage"></div>
            </div>
          </div>
        </div>
        <div>
          <div className='aboutMeUpper'>1</div>
          <div className='aboutMeContainer'>
            <div className='aboutMe'>ABOUT ME</div>
          </div>
          <div className='aboutMeContent'>Condimentum id venenatis a condimentum. Porttitor leo a diam sollicitudin. Amet porttitor eget dolor morbi non arcu risus quis varius. Faucibus turpis in eu mi bibendum neque. Non curabitur gravida arcu ac tortor dignissim convallis aenean et. Fermentum et sollicitudin ac orci phasellus egestas. Pellentesque diam volutpat commodo sed. Enim diam vulputate ut pharetra sit amet. Risus quis varius quam quisque id diam vel quam. Semper quis lectus nulla at volutpat diam ut venenatis tellus. A iaculis at erat pellentesque adipiscing commodo elit at. Lobortis elementum nibh tellus molestie nunc non blandit. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Sit amet mattis vulputate enim. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Varius duis at consectetur lorem donec massa sapien faucibus et. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Pharetra sit amet aliquam id diam maecenas ultricies mi. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Suspendisse interdum consectetur libero id. Gravida arcu ac tortor dignissim convallis aenean et tortor. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Quam pellentesque nec nam aliquam sem. Diam phasellus vestibulum lorem sed risus. Sociis natoque penatibus et magnis dis parturient montes. Adipiscing elit ut aliquam purus sit amet luctus. Duis ultricies lacus sed turpis tincidunt id aliquet risus. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Ut sem viverra aliquet eget.
          </div>
        </div>
        <div>
          <div className='aboutMeContainer'>
            <div className='aboutMe'>PORTFOLIO</div>
          </div>
          <div className='portfolioContainer flex flex-wrap'>
            <div className='portfolioImg w-1/3 flex justify-center'>
              <Image src="/test2.png" width={350} height={250} alt='yo' />
            </div>
            <div className='portfolioImg w-1/3 flex justify-center'>
              <Image src="/test2.png" width={350} height={250} alt='yo' />
            </div>
            <div className='portfolioImg w-1/3 flex justify-center'>
              <Image src="/test2.png" width={350} height={250} alt='yo' />
            </div>
            <div className='portfolioTitle w-1/3'>REAL PEOPLE TRAVEL</div>
            <div className='portfolioTitle w-1/3'>LOREM IDLE</div>
            <div className='portfolioTitle w-1/3'>PROJECT 3</div>
            <div className='portfolioSubtitle w-1/3'>A travel application using Google's API</div>
            <div className='portfolioSubtitle w-1/3'>An rpg idle game with a custom database</div>
            <div className='portfolioSubtitle w-1/3'>TBA</div>
          </div>
        </div>
        <div className='hide'>1</div>
        <div className='footer grid grid-cols-2 gap-4 w-full'>
          <div className='subFooter1'>
            <div>ROY HARGRAVE</div>
            <div>EMAIL - ROYHARGRAVE13@GMAIL.COM</div>
            <div>GITHUB - RAHARGRAVE</div>
            <div>479-657-8541</div>
          </div>
          <div className='subFooter2 flex flex-row items-center'>
            <a className='githublogo p-1' href="https://github.com/rahargrave"><Image src="/githublogo.png" width={50} height={50} alt='yo' /></a>
            <a className='instagramlogo p-1' href="https://instagram.com/rahargrave"><Image src="/instagramlogo.png" width={50} height={50} alt='yo' /></a>
            <a className='linkedinlogo p-1' href="https://www.linkedin.com/in/roy-hargrave-70170a83"><Image src="/linkedinlogo2.png" width={50} height={50} alt='yo' /></a>
            <a className='twitterlogo p-1' href="https://twitter.com/riverbend13?lang=en"><Image src="/twitterlogo.png" width={50} height={50} alt='yo' /></a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;




