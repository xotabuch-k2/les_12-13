import '../scss/App.scss'

function App() {

  return (
    <>
     <header className='header'>
      <div className='logoImg'>
          <img className='lodoUP' src="/public/img/1 block/logoUp.svg" alt="" />
          <img src="/public/img/1 block/HYDRA.svg" alt="" />
      </div>
      <nav className='navigation'>
          <a href="#">ABOUT</a>
          <a href="#">SERVICES</a>
          <a href="#">TECHNOLOGIES</a>
          <a href="#">HOW TO</a>
      </nav>
      <div className='divButton'>
        <button className='C_button'>CONTACT US</button>
        <button className='J_button'>JOIN HYDRA</button>
      </div>
    </header>
    <main>
      <section className='section1'>
        <div className='textSection1'>
          <h1 className='textSection1_h1'> <span className='textSection1_h1_s1'>Dive</span>  Into The Depths <br /> Of <span className='textSection1_h1_s2'>Virtual Reality</span></h1>
          <p className='textSection1_h2'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
sed do eiusmod tempor incididunt ut labore et dolore <br />
nisl tincidunt eget. Lectus mauris eros in vitae.
          </p>
          <div className='imgButt'>
          <button className='imgButtA' href="#"> BUILD YOUR WORLD</button>
            <img src="/public/img/1 block/arrow-small-right.svg" alt="" />
          </div>
        </div>
        <div className='imgSectionR'>
          <div className='Mask_girl_background'>
          </div>
          <img className='Mask_girl' src="/public/img/1 block/Mask_girl.svg" alt="" />
          <img className='Vector1' src="/public/img/1 block/Vector 1.svg" alt="" />
          <img className='Vector2' src="/public/img/1 block/Vector 2.svg" alt="" />
          <img className='Vector3' src="/public/img/1 block/Vector 3.svg" alt="" />
          <img className='Vector4' src="/public/img/1 block/Vector 4.svg" alt="" />
        </div>
      </section>
      <section className='secInfo'>
        <div className='secInfoL'>
          <div className='secInfoLimg'>
            <img src="/public/img/1 block/location.svg" alt="" />
          </div>
          <div className='secInfoLtext'>
            <h3 className='secInfoLtextU'>Pay Us a Visit</h3>
            <h4 className='secInfoLtextD'>Union St, Seattle, WA 98101, United States</h4>
          </div>
        </div>
        <div className='secInfoLine1'></div>
        <div className='secInfoC'>
          <div className='secInfoCimg'>
          <img src="/public/img/1 block/phone-call.svg" alt="" />
          </div>
          <div className='secInfoCtext'>
            <h3 className='secInfoCtextU'>Give Us a Call</h3>
            <h4 className='secInfoCtextD'>(110) 1111-1010</h4>
          </div>
        </div>
        <div className='secInfoLine2'></div>

        <div className='secInfoR'>
        <div className='secInfoRimg'>
          <img src="/public/img/1 block/mail.svg" alt="" />
          </div>
          <div className='secInfoRtext'>
            <h3 className='secInfoRtextU'>Send Us a Message</h3>
            <h4 className='secInfoRtextD'>Contact@HydraVTech.com</h4>
          </div>
        </div>
      </section>
      <section className='introText'>
        <div className='intro'>
          <h2>INTRODUCTION</h2>
          <h3>TO HYDRA VR</h3>
        </div>
        <img src="/public/img/2 block/arrow-small-right.svg" alt="" />
        <div className='text'>
          <p>
Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
      </section>
      <section></section>
      <section></section>
      <section></section>      
    </main>
    <footer>
      <nav>

      </nav>
    </footer>
    </>
  )
}
export default App
