
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import section1_image from './images/cabin.png'
import section2_image from './images/cake.png'
import section3_image from './images/circus.png'
import section4_image from './images/game (2).png'
import section5_image from './images/game.png'
import section6_image from './images/submarine.png'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <div className="about">
          <h2 className="about-header">PORTFOLIO</h2>
          <p class="subtitle fancy"><span><i className="fa fa-star" aria-hidden="true"></i></span></p>

          <div class="about-content">
            <div className="container">
              <div className="container-section">
                <div className="section section1">
                  <div className="overlay"><i class="fas fa-plus"></i></div>
                  <img src={section1_image} alt="" />
                </div>
                <div className="section section2">
                  <div className="overlay"><i class="fas fa-plus"></i></div>
                  <img src={section2_image} alt="" />
                </div>
                <div className="section section3">
                  <div className="overlay"><i class="fas fa-plus"></i></div>
                  <img src={section3_image} alt="" />
                </div>
                <div className="section section4">
                  <div className="overlay"><i class="fas fa-plus"></i></div>
                  <img src={section4_image} alt="" />
                </div>
                <div className="section section5">
                  <div className="overlay"><i class="fas fa-plus"></i></div>
                  <img src={section5_image} alt="" />
                </div>
                <div className="section section6">
                  <div className="overlay"><i class="fas fa-plus"></i></div>
                  <img src={section6_image} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="copyAbout1">
          <div className="container">
            <h2 className="about-header">About</h2>
            <p class="subtitle fancy"><span><i className="fa fa-star" aria-hidden="true"></i></span></p>
            <div class="copyAbout1-content">
              <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
            </div>
          </div>
        </div>

        <div className="contact">
          <div className="container">
            <h2 className="about-header">CONTACT ME</h2>
            <p class="subtitle fancy"><span><i className="fa fa-star" aria-hidden="true"></i></span></p>

            <form id="contactForm" name="sentMessage" novalidate="novalidate">
              <div class="control-group">
                <div class="form-group floating-label-form-group controls mb-0 pb-2 floating-label-form-group-with-value">
                  <input class="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." aria-invalid="false" />
                  <label>Name</label>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="control-group">
                <div class="form-group floating-label-form-group controls mb-0 pb-2 floating-label-form-group-with-value">
                  <input class="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." aria-invalid="false" />
                  <label>Email Address</label>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="control-group">
                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                  <input class="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                  <label>Phone Number</label>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="control-group">
                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Message</label>
                  <textarea class="form-control" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message." aria-invalid="false"></textarea>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <br />
              <div id="success"></div>
              <div class="form-send"><button class="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Send</button></div>
            </form>
          </div>
        </div>
        <footer>
          <div className="footer-content ">
            <div className="section">
              <h2> LOCATION</h2>
              <p>2215 John Daniel Drive
                Clark, MO 65243</p>
            </div>
            <div className="section">
              <h2> AROUND THE WEB</h2>
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-linkedin-in"></i>
              <i class="fas fa-basketball-ball"></i>
            </div>
            <div className="section">
              <h2> ABOUT FREELANCER</h2>
              <p>Freelance is a free to use, MIT licensed Bootstrap theme created by .</p>
            </div>
          </div>
          <div className="footer-end">
            <p>Copyright © Your Website 2021</p>
          </div>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;