"use client"

import React, { useState, useEffect } from 'react'

const HomePage = () => {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true)

  const handleScroll = () => {
    const currentScrollPos = window.scrollY

    if (currentScrollPos > prevScrollPos) {
      setVisible(false)
    } else {
      setVisible(true)
    }

    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <div>
      <div className={`bg-slate-700 h-14 sticky ${visible ? 'top-0' : ''} `}>
        Some Company Name
      </div>
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
        <div className="stickyBar grid grid-rows-1 grid-flow-col gap-4">
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
        <div>
          <div>ABOUT ME</div>
          <div className='text-xl'>Condimentum id venenatis a condimentum. Porttitor leo a diam sollicitudin. Amet porttitor eget dolor morbi non arcu risus quis varius. Faucibus turpis in eu mi bibendum neque. Non curabitur gravida arcu ac tortor dignissim convallis aenean et. Fermentum et sollicitudin ac orci phasellus egestas. Pellentesque diam volutpat commodo sed. Enim diam vulputate ut pharetra sit amet. Risus quis varius quam quisque id diam vel quam. Semper quis lectus nulla at volutpat diam ut venenatis tellus. A iaculis at erat pellentesque adipiscing commodo elit at. Lobortis elementum nibh tellus molestie nunc non blandit. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Sit amet mattis vulputate enim. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Varius duis at consectetur lorem donec massa sapien faucibus et. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Pharetra sit amet aliquam id diam maecenas ultricies mi. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Suspendisse interdum consectetur libero id. Gravida arcu ac tortor dignissim convallis aenean et tortor. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Quam pellentesque nec nam aliquam sem. Diam phasellus vestibulum lorem sed risus. Sociis natoque penatibus et magnis dis parturient montes. Adipiscing elit ut aliquam purus sit amet luctus. Duis ultricies lacus sed turpis tincidunt id aliquet risus. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Ut sem viverra aliquet eget.

            Netus et malesuada fames ac turpis egestas sed tempus. Volutpat odio facilisis mauris sit. Sed odio morbi quis commodo odio aenean. Mi proin sed libero enim sed faucibus turpis in eu. Accumsan in nisl nisi scelerisque eu. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Elit ut aliquam purus sit amet luctus venenatis. Nunc id cursus metus aliquam eleifend mi. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Turpis massa sed elementum tempus egestas. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum.

            Condimentum id venenatis a condimentum. Porttitor leo a diam sollicitudin. Amet porttitor eget dolor morbi non arcu risus quis varius. Faucibus turpis in eu mi bibendum neque. Non curabitur gravida arcu ac tortor dignissim convallis aenean et. Fermentum et sollicitudin ac orci phasellus egestas. Pellentesque diam volutpat commodo sed. Enim diam vulputate ut pharetra sit amet. Risus quis varius quam quisque id diam vel quam. Semper quis lectus nulla at volutpat diam ut venenatis tellus. A iaculis at erat pellentesque adipiscing commodo elit at. Lobortis elementum nibh tellus molestie nunc non blandit. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Sit amet mattis vulputate enim. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Varius duis at consectetur lorem donec massa sapien faucibus et. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Pharetra sit amet aliquam id diam maecenas ultricies mi. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.

            Mattis rhoncus urna neque viverra justo nec ultrices dui. Egestas dui id ornare arcu odio. Consequat interdum varius sit amet mattis vulputate enim. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Elementum pulvinar etiam non quam lacus suspendisse faucibus. Pharetra pharetra massa massa ultricies mi quis hendrerit. Rhoncus dolor purus non enim praesent elementum. Habitasse platea dictumst quisque sagittis purus sit amet volutpat. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Vel quam elementum pulvinar etiam non quam lacus suspendisse. Nulla posuere sollicitudin aliquam ultrices sagittis.

            Sagittis vitae et leo duis ut diam quam. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Posuere ac ut consequat semper viverra nam libero. Proin sed libero enim sed. Dui faucibus in ornare quam viverra orci sagittis eu. Metus vulputate eu scelerisque felis. Dignissim suspendisse in est ante in nibh mauris cursus. Senectus et netus et malesuada. Habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat. Feugiat nisl pretium fusce id velit ut tortor. Fames ac turpis egestas integer eget aliquet nibh praesent. Enim tortor at auctor urna. Turpis tincidunt id aliquet risus. Et malesuada fames ac turpis egestas integer eget aliquet. Duis ut diam quam nulla porttitor massa id neque. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Vehicula ipsum a arcu cursus vitae congue. Sed felis eget velit aliquet. Nibh mauris cursus mattis molestie a iaculis at.</div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;




