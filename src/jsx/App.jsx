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
      <section className='section2'>
        <div className='imgBack'>
          <img src="/public/img/2 block/Mask man.svg" alt="" />
          <img src="/public/img/2 block/Vector 7.svg" alt="" />
          <img src="/public/img/2 block/Vector 8.svg" alt="" />
        </div>
        <div className='textSec2'>
          <h2>ABOUT <br />
          <span>HYDRA VR</span>
          </h2>
          <h3>
Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
n tempor.
          </h3>
          <button>LET’S GET IN TOUCH</button>
        </div>
      </section>
      <section className='introText1'>
      <div className='intro'>
          <h2>WHY BUILD</h2>
          <h3>WITH HYDRA?</h3>
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
      <section className='pseudoSlider'>
        <div className='sliger'>




          <div className='vertSlider'>
            <div className='img1'>
            <img src="/public/img/3 block/SIMULATION.svg" alt="" />
            </div>
            <div className='mianText'>
              <h2>SIMULATION</h2>
            </div>
            <div className='zeroDiv'></div>
            <div className='text'>
              <p>
Vitae sapien pellentesque habitantmorbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae.
              </p>
            </div >
            <div>
            <button>TRY IT NOW</button>
            </div>
          </div>
          <div className='vertSlider1'>
            <div className='img1'>
             <img src="/public/img/3 block/EDUCATION.svg" alt="" />
            </div>
            <div className='mianText'>
              <h2>EDUCATION</h2>
            </div>
            <div className='zeroDiv'></div>
            <div className='text'>
              <p>
1Vitae sapien pellentesque habitantmorbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae.
              </p>
            </div >
              <div>
              <button>TRY IT NOW</button>
              </div>
          </div>
          <div className='vertSlider2'>
          <div className='img1'>
             <img src="/public/img/3 block/SELF-CARE.svg" alt="" />
            </div>
            <div className='mianText'>
              <h2>SELF-CARE</h2>
            </div>
            <div className='zeroDiv'></div>
            <div className='text'>
              <p>
1Vitae sapien pellentesque habitantmorbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae.
              </p>
            </div >
              <div>
              <button>TRY IT NOW</button>
              </div>
          </div>
          <div className='vertSlider3'>
          <div className='img1'>
             <img src="/public/img/3 block/OUTDOOR.svg" alt="" />
            </div>
            <div className='mianText'>
              <h2>OUTDOOR</h2>
            </div>
            <div className='zeroDiv'></div>
            <div className='text'>
              <p>
1Vitae sapien pellentesque habitantmorbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae.
              </p>
            </div >
              <div>
              <button>TRY IT NOW</button>
              </div>
          </div>
        </div>
        <div className='lineBack'>

        </div>
        
        </section>      
    </main>
    <footer>
      <nav>

      </nav>
    </footer>
    </>
  )
}
export default App
