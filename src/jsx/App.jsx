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
          <p className='textSection1_h2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
          sed do eiusmod tempor incididunt ut labore et dolore <br />
          nisl tincidunt eget. Lectus mauris eros in vitae.</p>
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
          <div>
          <img src="/public/img/1 block/location.svg" alt="" />
          </div>
          <div>
          <h3>Pay Us a Visit</h3>
          <h4>Union St, Seattle, WA 98101, United States</h4>
          </div>

        </div>
        <div className='secInfoLine'></div>
        <div className='secInfoC'>

        </div>
        <div className='secInfoLine'></div>
        <div className='secInfoR'>

        </div>
      </section>
      <section></section>
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
