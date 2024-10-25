import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
    useEffect(() => {
      AOS.init({ duration: 1000 }); // You can customize the duration
    }, []);

  return (
    <>
      <header className="bg-light">
          <nav className="navbar navbar-expand-lg navbar-light bg-light custom-bg" id="header-nav" role="navigation" style={{ backgroundColor: '#20c997'}}>
            <div className="container"><a className="link-dark navbar-brand site-title mb-0" href="#">Asaldo</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto me-2">
                  <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                  <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
                  <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                  <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </nav>
      </header>
      <div className="page-content">
      <div id="content">
        <header>
          <div className="cover bg-light custom-bg" style={{ backgroundColor: '#20c997' }}>
            <div className="container px-3">
              <div className="row">
                <div className="col-lg-6 p-2"><img className="img-fluid" src="images/illustrations/hello3.png" alt="hello" style= {{ maxWidth: '100%', maxHeight: '100%' }}/></div>
                <div className="col-lg-6">
                  <div className="mt-5">
                    <p className="lead text-uppercase mb-1">Hello!</p>
                    <h1 className="intro-title marker" data-aos="fade-up"> I’m Rizalyne</h1>
                    <p className="lead fw-normal mt-3" data-aos="fade-up" data-aos-delay="100"> Web Developer & Designer</p>
                    <div className="social-nav" data-aos="fade-up" data-aos-delay="200">
                      <nav role="navigation">
                        <ul className="nav justify-content-left">
                          <li className="nav-item"><a className="nav-link" href="https://twitter.com/templateflip" title="Twitter"><i className="fab fa-twitter"></i><span className="menu-title sr-only">Twitter</span></a></li>
                          <li className="nav-item"><a className="nav-link" href="https://www.facebook.com/templateflip" title="Facebook"><i className="fab fa-facebook"></i><span className="menu-title sr-only">Facebook</span></a></li>
                          <li className="nav-item"><a className="nav-link" href="https://www.instagram.com/templateflip" title="Instagram"><i className="fab fa-instagram"></i><span className="menu-title sr-only">Instagram</span></a></li>
                          <li className="nav-item"><a className="nav-link" href="https://www.linkedin.com/" title="LinkedIn"><i className="fab fa-linkedin"></i><span className="menu-title sr-only">LinkedIn</span></a></li>
                        </ul>
                      </nav>
                    </div>
                    <div className="mt-3" data-aos="fade-up" data-aos-delay="200"><a className="btn btn-primary shadow-sm mt-1 hover-effect" href="asaldo_cv.docx" 
                        style={{
                          color: 'rgb(255, 255, 255)',
                          backgroundColor: '#20c997',
                          border: '1px solid #000000',
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.color = 'white';
                          e.currentTarget.style.backgroundColor = '#105334';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.color = 'rgb(255, 255, 255)';
                          e.currentTarget.style.backgroundColor = '#20c997';
                        }}>HIRE ME!</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wave-bg"></div>
        </header>

      <div className="section pt-4 px-3 px-lg-4" id="about">
        <div className="container-narrow">
          <div className="row">
            <div className="col-md-6">
              <h2 className="h4 my-2">Hello! I’m Rizalyne Catbagan Asaldo.</h2>
              <p>I am passionate web developer and designer dedicated to crafting visually stunning and highly functional websites. With a keen eye for detail and a love for innovation, I specialize in creating user-friendly experiences that engage and inspire. Whether you're looking to build a new website from scratch or enhance your existing one, I’m here to bring your vision to life. Let’s create something amazing together!.</p>
              <div className="row mt-3">
                <div className="col-sm-2">
                  <div className="pb-1">Age:</div>
                </div>
                <div className="col-sm-10">
                  <div className="pb-1 fw-bolder">21</div>
                </div>
                <div className="col-sm-2">
                  <div className="pb-1">Address:</div>
                </div>
                <div className="col-sm-10">
                  <div className="pb-1 fw-bolder">Valenzuela City, Philippines</div>
                </div>
                <div className="col-sm-2">
                  <div className="pb-1">Staus:</div>
                </div>
                <div className="col-sm-10">
                  <div className="pb-1 fw-bolder">Available</div>
                </div>
              </div>
            </div>
            <div className="col-md-5 offset-md-1" data-aos="fade-left" data-aos-delay="100"><img className="avatar img-fluid mt-2" src="images/avatar.jpg" width="400" height="400" alt="Walter Patterson"/></div>
          </div>
        </div>
      </div>

      <div className="section px-3 px-lg-4 pt-5" id="services">
        <div className="container-narrow">
          <div className="text-center mb-5">
            <h2 className="marker marker-center">My Interest</h2>
          </div>
          <div className="text-center">
            <p className="mx-auto mb-3" style= {{ maxWidth: '600px' }}> I also enjoy a variety of hobbies and interests beyond my current skills and pursuits, such as dancing, diving into fictional books, staying active with workouts, and exploring new destinations through travel.</p>
          </div>
          <div className="row py-3">
            <div className="col-md-3 text-center" data-aos="fade-up" data-aos-delay="100"><img className="mb-2" src="images/services/dance.png" width="96" height="96" alt="web design"/>
              <div className="h5">Dancing</div>
            </div>
            <div className="col-md-3 text-center" data-aos="fade-up" data-aos-delay="300"><img className="mb-2" src="images/services/read.png" width="96" height="96" alt="ui-ux"/>
              <div className="h5">Reading</div>
            </div>
            <div className="col-md-3 text-center" data-aos="fade-up" data-aos-delay="300"><img className="mb-2" src="images/services/workout.png" width="96" height="96" alt="ui-ux"/>
              <div className="h5">Workout</div>
            </div>
            <div className="col-md-3 text-center" data-aos="fade-up" data-aos-delay="400"><img className="mb-2" src="images/services/travel.png" width="96" height="96" alt="app development"/>
              <div className="h5">Travel</div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <div className="container-narrow">
        <div className="text-center mb-5">
          <h2 className="marker marker-center">My Achievements</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-3" data-aos="fade-right" data-aos-delay="100">
              <div className="card-header px-3 py-2">
                <div className="d-flex justify-content-between">
                  <div>
                    <h3 className="h5 mb-1">Primary Education</h3>
                    <div className="text-muted text-small">Gen. T. De Leon Elementary School <small>(2009-2015)</small></div>
                  </div><img src="images/services/ui-ux.png" width="50" height="50" alt="ui-ux"/>
                </div>
              </div>
              <div className="card-body px-3 py-2">
                <b>Achievements :</b>
                <p>- Top student in overall class, Grade 6</p>
                <p>- Top student in overall class, Grade 5</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3" data-aos="fade-left" data-aos-delay="300">
              <div className="card-header px-3 py-2">
                <div className="d-flex justify-content-between">
                  <div>
                    <h3 className="h5 mb-1">Secondary Eduaction</h3>
                    <div className="text-muted text-small">Our Lady of Lourdes College <small>(2015-2021)</small></div>
                  </div><img src="images/services/app-development.png"  width="50" height="50" alt="app development"/>
                </div>
              </div>
              <div className="card-body px-3 py-2">
                <b>Achievements :</b>
                <p>- Graduated from Senior High School with High Honors</p>
                <p>- Graduated from Junior High School with Honors</p>
                <p>- Consistently a top student in overall class during Junior High</p>
                <p>- Consistently a top student in every subject during Junior High</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3" data-aos="fade-right" data-aos-delay="200">
              <div className="card-header px-3 py-2">
                <div className="d-flex justify-content-between">
                  <div>
                    <h3 className="h5 mb-1">Tertiary Education</h3>
                    <div className="text-muted text-small">La Verdad Christian College <small>(2021-Present)</small></div>
                  </div><img src="images/services/web-design.png"  width="50" height="50" alt="web design"/>
                </div>
              </div>
              <div className="card-body px-3 py-2">
                <b>Achievements :</b>
                <p>2nd Year - 1st Semester - Dean Lister</p>       
                <p>1st Year - 2nd Semester - Dean Lister</p>                 
                <p>1st Year - 1st Semester - President Lister</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3" data-aos="fade-left" data-aos-delay="400">
              <div className="card-header px-3 py-2">
                <div className="d-flex justify-content-between">
                  <div>
                    <h3 className="h5 mb-1">Seminars</h3>
                    <div className="text-muted text-small">Fil-Chi Love and Care Foundation Inc.<small>(2015)</small></div>
                  </div><img src="images/services/full-stack.png"  width="50" height="50" alt="full stack"/>
                </div>
              </div>
              <div className="card-body px-3 py-2">
                <b>Achievements :</b>
                <p>- Certificate of completion</p>
                <p>- Perfect Exam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="section px-3 px-lg-4 pt-5" id="skills">
        <div className="container-narrow">
          <div className="text-center mb-5">
            <h2 className="marker marker-center">My Expertise</h2>
          </div>
          <div className="text-center">
            <p className="mx-auto mb-3" style= {{ maxWidth: '600px' }}>I am a quick learner and specialize in multitude of skills required for Web Application Development</p>
          </div>
          <div className="bg-light p-3 custom-bg" style= {{backgroundColor: '#20c997'}}>
            <div className="row">
              <div className="col-md-5">
                <div className="py-1">
                  <div className="d-flex text-small fw-bolder"><span className="me-auto">HTML5</span><span>90%</span></div>
                  <div className="progress my-1">
                    <div className="progress-bar bg-primary" role="progressbar" data-aos="zoom-in-right" data-aos-delay="100" data-aos-anchor=".skills-section" style= {{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="py-1">
                  <div className="d-flex text-small fw-bolder"><span className="me-auto">CSS3</span><span>95%</span></div>
                  <div className="progress my-1">
                    <div className="progress-bar bg-primary" role="progressbar" data-aos="zoom-in-right" data-aos-delay="200" data-aos-anchor=".skills-section" style= {{ width: '95%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="py-1">
                  <div className="d-flex text-small fw-bolder"><span className="me-auto">JavaScript</span><span>60%</span></div>
                  <div className="progress my-1">
                    <div className="progress-bar bg-primary" role="progressbar" data-aos="zoom-in-right" data-aos-delay="300" data-aos-anchor=".skills-section" style= {{ width: '60%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="py-1">
                  <div className="d-flex text-small fw-bolder"><span className="me-auto">React</span><span>75%</span></div>
                  <div className="progress my-1">
                    <div className="progress-bar bg-primary" role="progressbar" data-aos="zoom-in-right" data-aos-delay="300" data-aos-anchor=".skills-section" style= {{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 offset-md-2">
                <div className="py-1">
                  <div className="d-flex text-small fw-bolder"><span className="me-auto">PHP</span><span>65%</span></div>
                  <div className="progress my-1">
                    <div className="progress-bar bg-primary" role="progressbar" data-aos="zoom-in-right" data-aos-delay="400" data-aos-anchor=".skills-section" style= {{ width: '65%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="py-1">
                  <div className="d-flex text-small fw-bolder"><span className="me-auto">WordPress</span><span>70%</span></div>
                  <div className="progress my-1">
                    <div className="progress-bar bg-primary" role="progressbar" data-aos="zoom-in-right" data-aos-delay="500" data-aos-anchor=".skills-section" style= {{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="py-1">
                  <div className="d-flex text-small fw-bolder"><span className="me-auto">MySQL</span><span>80%</span></div>
                  <div className="progress my-1">
                    <div className="progress-bar bg-primary" role="progressbar" data-aos="zoom-in-right" data-aos-delay="600" data-aos-anchor=".skills-section" style= {{ width: '80%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="py-1">
                  <div className="d-flex text-small fw-bolder"><span className="me-auto">Photoshop</span><span>85%</span></div>
                  <div className="progress my-1">
                    <div className="progress-bar bg-primary" role="progressbar" data-aos="zoom-in-right" data-aos-delay="600" data-aos-anchor=".skills-section"style= {{ width: '85%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="section px-2 px-lg-4 pt-5" id="portfolio">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="marker marker-center">My Portfolio</h2>
        </div>
        <div class="grid bp-gallery pb-3" data-aos="zoom-in-up" data-aos-delay="100">
          {/* <div class="grid-sizer"></div> */}
          <div class="grid-item"><a href="https://www.netlify.com/">
              <figure class="portfolio-item"><img src="images/portfolio/1-small.png" data-bp="images/portfolio/1.jpg"/>
                <figcaption>
                  <h4 class="h5 mb-0">Web App Personal Portfolio</h4>
                  <div>Netlify.com</div>
                </figcaption>
              </figure></a></div>
          <div class="grid-item"><a href="https://www.netlify.com/">
              <figure class="portfolio-item"><img src="images/portfolio/2-small.png" data-bp="images/portfolio/2.jpg" data-caption="Example of an optional caption."/>
                <figcaption> 
                  <h4 class="h5 mb-0">Web App Personal Portfolio</h4>
                  <div>Netlify.com</div>
                </figcaption>
              </figure></a></div>
              <br/>
          <div class="grid-item"><a href="https://wix.com/">
              <figure class="portfolio-item"><img src="images/portfolio/3-small.png" data-bp="images/portfolio/3.jpg" data-caption="Example of an optional caption."/>
                <figcaption> 
                  <h4 class="h5 mb-0">Personal Portfolio</h4>
                  <div>Wix.com</div>
                </figcaption>
              </figure></a></div>
          <div class="grid-item"><a href="https://wix.com/">
              <figure class="portfolio-item"><img src="images/portfolio/4-small.png" data-bp="images/portfolio/4.jpg"/>
                <figcaption>
                  <h4 class="h5 mb-0">Personal Portfolio</h4>
                  <div>Wix.com</div>
                </figcaption>
              </figure></a></div>
          <div class="grid-item"><a href="https://www.netlify.com/">
              <figure class="portfolio-item"><img src="images/portfolio/5-small.png" data-bp="images/portfolio/5.jpg"/>
                <figcaption>
                  <h4 class="h5 mb-0">Web App Personal Portfolio</h4>
                  <div>Netlify.com</div>
                </figcaption>
              </figure></a></div>
          <div class="grid-item"><a href="https://www.netlify.com/">
              <figure class="portfolio-item"><img src="images/portfolio/6-small.png" data-bp="images/portfolio/6.jpg"/>
                <figcaption>
                  <h4 class="h5 mb-0">Web App Personal Portfolio</h4>
                  <div>Netlify.com</div>
                </figcaption>
              </figure></a></div>
          <div class="grid-item"><a href="https://wix.com/">
              <figure class="portfolio-item"><img src="images/portfolio/7-small.png" data-bp="images/portfolio/7.jpg"/>
                <figcaption>
                  <h4 class="h5 mb-0">Personal Portfolio</h4>
                  <div>Wix.com</div>
                </figcaption>
              </figure></a></div>
          <div class="grid-item"><a href="https://wix.com/">
              <figure class="portfolio-item"><img src="images/portfolio/8-small.png" data-bp="images/portfolio/8.jpg"/>
                <figcaption>
                  <h4 class="h5 mb-0">Personal Portfolio</h4>
                  <div>Wix.com</div>
                </figcaption>
              </figure></a></div>
        </div>
      </div>
    </div>

      <div className="section px-2 px-lg-4 pb-4 pt-5 mb-5" id="contact" >
        <div className="container-narrow">
          <div className="text-center mb-5">
            <h2 className="marker marker-center">Contact Me</h2>
          </div>
          <div className="row">
            <div className="col-md-6" data-aos="zoom-in" data-aos-delay="100">
              <div className="bg-light my-2 p-3 pt-2 custom-bg" style= {{ backgroundColor: '#20c997'}}><form action="https://formspree.io/your@email.com"
          method="POST">
          <div className="form-group my-2">
            <label htmlFor="name" className="form-label fw-bolder">Name</label>
            <input className="form-control" type="text" id="name" name="name" required/>
          </div>
          <div className="form-group my-2">
            <label htmlFor="email" className="form-label fw-bolder">Email</label>
            <input className="form-control" type="email" id="email" name="_replyto" required/>
          </div>
        <div className="form-group my-2">
          <label htmlFor="message" className="form-label fw-bolder">Message</label>
          <textarea className="form-control" style= {{ resize: 'none'}} id="message" name="message" rows="4" required></textarea>
        </div>
        <button className="btn btn-primary mt-2" type="submit" 
        style={{
          color: 'rgb(255, 255, 255)',
          backgroundColor: '#198754',
          border: '#198754',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.color = 'white';
          e.currentTarget.style.backgroundColor = '#105334';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.color = 'rgb(255, 255, 255)';
          e.currentTarget.style.backgroundColor = '#198754';
        }}>Send</button>
      </form>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left" data-aos-delay="300">
              <div className="mt-3 px-1">
                <div className="h5">Let’s talk !</div>
                <p>If you are interested you then drop me a message using the contact form. </p>
                <p>Or get in touch using my email and my contact number.</p>
              </div>
              <div className="mt-53 px-1">
                <div className="row"> 
                  <div className="col-sm-2">
                    <div className="pb-1">Email:</div>
                  </div>
                  <div className="col-sm-10">
                    <div className="pb-1 fw-bolder">rizalyneasaldo@student.laverdad.edu.ph</div>
                  </div>
                  <div className="col-sm-2">
                    <div className="pb-1">Phone:</div>
                  </div>
                  <div className="col-sm-10">
                    <div className="pb-1 fw-bolder">+0123-456-7890</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="pt-4 pb-4 text-center bg-light">
        <div className="container">
          <div className="my-3">
            <div className="h4">Rizalyne C. Asaldo</div>
            <p>Web Developer & Designer</p>
            <div className="social-nav">
              <nav role="navigation">
                <ul className="nav justify-content-center">
                  <li className="nav-item"><a className="nav-link" href="https://twitter.com/templateflip" title="Twitter"><i className="fab fa-twitter"></i><span className="menu-title sr-only">Twitter</span></a></li>
                  <li className="nav-item"><a className="nav-link" href="https://www.facebook.com/templateflip" title="Facebook"><i className="fab fa-facebook"></i><span className="menu-title sr-only">Facebook</span></a></li>
                  <li className="nav-item"><a className="nav-link" href="https://www.instagram.com/templateflip" title="Instagram"><i className="fab fa-instagram"></i><span className="menu-title sr-only">Instagram</span></a></li>
                  <li className="nav-item"><a className="nav-link" href="https://www.linkedin.com/" title="LinkedIn"><i className="fab fa-linkedin"></i><span className="menu-title sr-only">LinkedIn</span></a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="text-small text-secondary">
            <div className="mb-1">&copy; Super Folio. All rights reserved.</div>
            <div>
              {/* Make sure to buy a license for the template before removing the line below. Buy license on https://templateflip.com/ */}Design - <a href="https://templateflip.com/" target="_blank">TemplateFlip</a></div>
          </div>
        </div>
      </footer></div>
    </>
  )
}

export default App
