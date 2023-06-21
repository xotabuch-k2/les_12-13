import '../scss/App.scss'
import {Formik, Form, Field} from 'formik';


function App() {
  const initialValues = {
    name: "",
    Lname: "",
    email: "",
    phone: "",
    subject:"",
    TuS:""
  };
  const validate = (values) => {
    const errors = {};

    if (!/^[a-zA-Z]+$/.test(values.name) || values.name.length < 2) 
    {
      errors.name = "Enter correct Name";
    }
    if (!/^[a-zA-Z]+$/.test(values.Lname) || values.Lname.length < 2) 
    {
      errors.Lname = "Enter correct Last Name";
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) 
    {
      errors.email = "Enter correct Email";
    }
    if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i.test(values.phone) || values.phone.length < 13)  
    {
      errors.phone = "Enter correct Phone";
    }
    if (!/^[a-zA-Z0-9._%+-]+$/.test(values.subject)) 
    {
      errors.subject = "Enter correct Subject";
    }
    if (!/^[a-zA-Z0-9._%+-]+$/.test(values.TuS)) 
    {
      errors.TuS = "Enter correct Subject";
    }
    return errors;
  };
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
<div className='verPC'>
  <header className='header'>
    <div className='logoImg'>
        <img className='lodoUP' src="/public/img/1 block/logoUp.svg" alt="" />
        <img src="/public/img/1 block/HYDRA.svg" alt="" />
    </div>
    <nav className='navigation'>
      <li><a href="#">ABOUT</a></li>
      <li><a href="#">SERVICES</a></li>
      <li><a href="#">TECHNOLOGIES</a></li>
      <li><a href="#">HOW TO</a></li>
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
    <section  className='secInfo'>
          <div className='secInfoL'>
            <div className='secInfoLimg'>
              <img src="/public/img/1 block/location.svg" alt="" />
            </div>
            <div className='sectInfoLtext'>
              <h3 className='secInfoLtextU'>Pay Us a Visit</h3>
              <div className='link'>
                <a className='secInfoLtextD' href="https://www.google.com/maps/place/Union+St,+Seattle,+WA+98101,+США/@47.6099139,-122.3363054,17z/data=!3m1!4b1!4m6!3m5!1s0x54906ab465f9a32d:0x2b0d2afe1e719e15!8m2!3d47.6099139!4d-122.3341167!16s%2Fg%2F1vcq795y?entry=ttu">Union St, Seattle, WA 98101, United States</a>
              </div>
            </div>
          </div>
          <div className='secInfoLine1'></div>
          <div className='secInfoC'>
            <div className='secInfoCimg'>
            <img src="/public/img/1 block/phone-call.svg" alt="" />
            </div>
            <div className='secInfoCtext'>
              <h3 className='secInfoCtextU'>Give Us a Call</h3>
              <div className='link'>
                <a className='secInfoLtextD' href="tel:
                +11011111010">(110) 1111-1010</a>
            </div>
            </div>
          </div>
          <div className='secInfoLine2'></div>

          <div className='secInfoR'>
          <div className='secInfoRimg'>
            <img src="/public/img/1 block/mail.svg" alt="" />
            </div>
            <div className='secInfoRtext'>
              <h3 className='secInfoRtextU'>Send Us a Message</h3>
              <div className='link'>
                <a className='secInfoLtextD' href="mailto:
                Contact@HydraVTech.com">Contact@HydraVTech.com</a>
              </div>
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
              <p>
              Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
              urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
              dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
              Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
              sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
              etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
              cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
              retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
              n tempor.
              </p>
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
                  Vitae sapien pellentesque habitantmorbi
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
                  Vitae sapien pellentesque habitantmorbi
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
                  Vitae sapien pellentesque habitantmorbi
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
            <img src="/public/img/3 block/Vector 14.svg" alt="" />
          </div>
    </section>
    <section className='techno'>
            <div>
              <h2 >TECHNOLOGIES & HARDWARE</h2>
              <h3>SED BY HYDRA VR.</h3>
            </div>
            <div>
              <button>ᐯ</button>
            </div>
    </section>
    <section className='technoImg'>
              <img src="/public/img/5 block/Hydra-Tech1 1.svg" alt="" />
              <img src="/public/img/5 block/Hydra-Tech3 1.svg" alt="" />
              <img src="/public/img/5 block/Hydra-Tech2 1.svg" alt="" />
              <img src="/public/img/5 block/Hydra-Tech4 1.svg" alt="" />
    </section>
    <section className='introText2'>
          <div className='intro'>
            <h2>HOW WE BUILD</h2>
            <h3>WITH HYDRA VR?</h3>
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
    <section className='numbers'>
          <div className='backG'>
            <div className='b01'>
              <div className='INradius'>
                <div className='radius'>
                  <h2>01</h2>
                </div>
              </div>
              <div className='INcont'>
              <img src="/public/img/6 block/arrow-small-right.svg" alt="" />
                <h2>
                3D Conception & Design
                </h2>
              </div>
            </div>
            <div className='b02'>
            <div className='INradius'>
                <div className='radius'>
                  <h2>02</h2>
                </div>
              </div>
              <div className='INcont'>
              <img src="/public/img/6 block/arrow-small-right.svg" alt="" />
                <h2>
                3D Conception & Design
                </h2>
              </div>
            </div>
            <div className='b03'>
            <div className='INradius'>
                <div className='radius'>
                  <h2>03</h2>
                </div>
              </div>
              <div className='INcont'>
              <img src="/public/img/6 block/arrow-small-right.svg" alt="" />
                <h2>
                3D Conception & Design
                </h2>
              </div>
            </div>
            <div className='b04'>
            <div className='INradius'>
                <div className='radius'>
                  <h2>04</h2>
                </div>
              </div>
              <div className='INcont'>
              <img src="/public/img/6 block/arrow-small-right.svg" alt="" />
                <h2>
                3D Conception & Design
                </h2>
              </div>
            </div>
          </div>
    </section>
    <section className='validation'>
      <div className='textHead'>
        <div className='h2'>
          <h2>JOIN HYDRA</h2>
        </div>
        <div className='img'>
          <img src="/public/img/7 block/Vector 16.png" alt="" />
        </div>
        <div className='h3'>
        <h3>Let’s Build Your VR Experience</h3>
        </div>
      </div>
      <div className='forms'>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validate}>
          {({ errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
          <div className='Qblock'>
            <Field 
                as="input"
                placeholder='First Name'
                className={touched.name && errors.name ? "invalid" : ""}
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Field
                as="input" 
                placeholder='Last Name'
                className={touched.Lname && errors.Lname ? "invalid" : ""}
                name="Lname"
                onChange={handleChange}
                onBlur={handleBlur}
              />
          </div>
          <div className='Wblock'>
              <Field 
                as="input"
                placeholder='Email'
                className={touched.email && errors.email ? "invalid" : ""}
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Field
                as="input"
                placeholder='Phone Number'
                className={touched.phone && errors.phone ? "invalid" : ""}
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
              />
          </div>
          <div className='Eblock'>
              <Field
                as="input" 
                placeholder='Subject'
                className={touched.subject && errors.subject ? "invalid" : ""}
                name="subject"
                onChange={handleChange}
                onBlur={handleBlur}
              />
          </div>
          <div className='Tblock'>
              <Field
                as="textarea"
                placeholder="Tell Us Something..."
                className={touched.TuS && errors.TuS ? "invalid" : ""}
                name="TuS"
                onChange={handleChange}
                onBlur={handleBlur}
              />
          </div>
          <div className='button'>
            <button className='InButt' disabled={!errors} type="submit">SEND TO HYDRA</button>
          </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  </main>
  <footer className='linksInfo'>
    <div className='block1'>
      <div className='imgLogo'>
        <img className='Logo' src="/public/img/7 block/Frame_Logo.svg" alt="" />
      </div>
      <div className='imgL'>
        <img src="/public/img/7 block/L_Vector 20.svg" alt="" />
      </div>
      <nav>
        <li><a href="">ABOUT</a></li>
        <li><a href="">SERVICES</a></li>
        <li><a href="">TECHNOLOGIES</a></li>
        <li><a href="">HOW TO</a></li>
        <li><a href="">JOIN HYDRA</a></li>
      </nav>
      <div>
        <img src="/public/img/7 block/L_Vector 20.svg" alt="" />
      </div>
      <nav>
        <li><a href="">F.A.Q</a></li>
        <li><a href="">SITEMAP</a></li>
        <li><a href="">CONDITIONS</a></li>
        <li><a href="">LICENSES</a></li>
      </nav>
      <div>
        <img src="/public/img/7 block/L_Vector 20.svg" alt="" />
      </div>
      <section className='information'>
        <div className='SOCIALIZE'>
          <h4>SOCIALIZE WITH HYDRA</h4>
        </div>
        <div className='fotoLink'>
          <ul>
            <li>
              <a href=""><img src="/public/img/7 block/SOCIALIZE_WITH_HYDRA/1.svg" alt="" /></a>
              </li>
            <li>
              <a href=""><img src="/public/img/7 block/SOCIALIZE_WITH_HYDRA/2.svg" alt="" /></a>
            </li>
            <li>
              <a href=""><img src="/public/img/7 block/SOCIALIZE_WITH_HYDRA/3.svg" alt="" /></a>
            </li>
            <li>
              <a href=""><img src="/public/img/7 block/SOCIALIZE_WITH_HYDRA/4.svg" alt="" /></a>
            </li>
            <li>
              <a href=""><img src="/public/img/7 block/SOCIALIZE_WITH_HYDRA/5.svg" alt="" /></a>
            </li>
            <li>
              <a href=""><img src="/public/img/7 block/SOCIALIZE_WITH_HYDRA/6.svg" alt="" /></a>
            </li>
          </ul>
        </div>
        <div className='buttonLink'>
          <button><span>BUILD YOUR WORLD</span></button>
        </div>
      </section>
    </div>
    <div className='block2'>
      <div className='img1'>
      <img src="/public/img/7 block/Vector 19.svg" alt="" />
      </div>
      <div className='img2'>
      <img src="/public/img/7 block/Vector 18.svg" alt="" />
      </div>
    </div>
    <div className='downVector'>
      <img src="/public/img/7 block/Down_Vector 17.svg" alt="" />
    </div>
    <div className='lastText'>
      <h3 className='h3Text'>
      2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED 
      </h3>
    </div>
  </footer>
</div>




  <div className='verLap'>

  </div>







    <div className='verPhone'>
    <header className='header1'>
      <div className='logoImg1'>
        <img className='lodoUP1' src="/public/img/1 block/logoUp.svg" alt="" />
        <img className='hudra' src="/public/img/1 block/HYDRA.svg" alt="" />
        </div>
        <div className="navigation1">
          <input id="menu-toggle" type="checkbox" />
          <label className="menu-btn" for="menu-toggle">
            <span></span>
          </label>
          <ul className="menubox">
            <li><a className="menu-item" href="#">ABOUT</a></li>
            <li><a className="menu-item" href="#">SERVICES</a></li>
            <li><a className="menu-item" href="#">TECHNOLOGIES</a></li>
            <li><a className="menu-item" href="#">HOW TO</a></li>
          </ul>
        </div>
    </header>
      <main>
        <div className='section1'>
          <div className='imgSectionR'>
            <div className='Mask_girl_background'>
            </div>
            <img className='Mask_girl' src="/public/img/1 block/Mask_girl.svg" alt="" />
            <img className='Vector1' src="/public/img/1 block/Vector 1.svg" alt="" />
            <img className='Vector2' src="/public/img/1 block/Vector 2.svg" alt="" />
            <img className='Vector3' src="/public/img/1 block/Vector 3.svg" alt="" />
            <img className='Vector4' src="/public/img/1 block/Vector 4.svg" alt="" />
          </div>
          <div className='textSection1'>
            <h1 className='textSection1_h1'> <span className='textSection1_h1_s1'>Dive</span>  Into The Depths <br /> Of <span className='textSection1_h1_s2'>Virtual Reality</span></h1>
          </div>
          <div className='butt2'>
            <button href="#"> BUILD YOUR WORLD</button>
          </div>
        <section  className='secInfo'>
          <div className='secInfoL'>
            <div className='secInfoLimg'>
              <img src="/public/img/1 block/location.svg" alt="" />
            </div>
            <div className='sectInfoLtext'>
              <div className='link'>
                <a className='secInfoLtextD' href="https://www.google.com/maps/place/Union+St,+Seattle,+WA+98101,+США/@47.6099139,-122.3363054,17z/data=!3m1!4b1!4m6!3m5!1s0x54906ab465f9a32d:0x2b0d2afe1e719e15!8m2!3d47.6099139!4d-122.3341167!16s%2Fg%2F1vcq795y?entry=ttu">Union St, Seattle, WA 98101, United States</a>
              </div>
            </div>
          </div>
          <div className='secInfoC'>
            <div className='secInfoCimg'>
            <img src="/public/img/1 block/phone-call.svg" alt="" />
            </div>
            <div className='secInfoCtext'>
                  <div className='link'>
                    <a className='secInfoLtextD' href="tel:
                    +11011111010">(110) 1111-1010</a>
                </div>
            </div>
          </div>
          <div className='secInfoR'>
          <div className='secInfoRimg'>
            <img src="/public/img/1 block/mail.svg" alt="" />
            </div>
            <div className='secInfoRtext'>
              <div className='link'>
                <a className='secInfoLtextD' href="mailto:
                Contact@HydraVTech.com">Contact@HydraVTech.com</a>
              </div>
            </div>
          </div>
        </section>
        <section className='introText'>
          <div className='intro'>
            <h2>INTRODUCTION</h2>
            <h3>TO HYDRA VR</h3>
          </div>
          <img src="/public/img/2 block/Mask man.svg" alt="" />
          <div className='text'>
            <p>
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus urna neque viverra justo. Vivamus 
            at augue eget arcu dictum. Ultrices gravida dictum fusce 
            ut placerat orci. Aenean et tortor at risus viverra adipisci
            ng at in. Mattis aliquam faucibus purus in massa. Est 
            placerat in egestas erat imperdiet sed. Consequat sem
            per viverra nam libero justo laoreet sit amet. Aliquam 
            etiam erat velit scelerisque in dictum non consectetur 
            a. Laoreet sit amet cursus sit amet. Vel eros donec ac 
            odio tempor orci dapibus. Sem nulla pharetra diam sit 
            amet nisl suscipit adipiscing bibendum. Leo a diam 
            sollicitudin tempor.
            </p>
          </div>
        </section>
          
        
        </div>
      

      </main>
      <footer></footer>
    </div>
    </>
  )








}
export default App
