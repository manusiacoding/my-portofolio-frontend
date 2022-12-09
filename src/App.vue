<script>
import Typed from 'typed.js'

export default {
  mounted() {
    const options = {
      strings: ["Web Developer", "Back-End Developer"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
    }
    new Typed('.typed', options)
  }
}
</script>

<template>
  <!-- ======= Mobile nav toggle button ======= -->
  <!-- <button type="button" class="mobile-nav-toggle d-xl-none"><i class="bi bi-list mobile-nav-toggle"></i></button> -->
  <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
  <!-- ======= Header ======= -->
  <header id="header" class="d-flex flex-column justify-content-center">

    <nav id="navbar" class="navbar nav-menu">
      <ul>
        <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
        <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
        <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
        <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a>
        </li>
        <li><a href="#services" class="nav-link scrollto"><i class="bx bx-award"></i> <span>Awards</span></a></li>
        <!-- <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li> -->
      </ul>
    </nav><!-- .nav-menu -->

  </header><!-- End Header -->

  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex flex-column justify-content-center">
    <div class="container" data-aos="zoom-in" data-aos-delay="100">
      <h1>Fawwaz Hudzalfah Saputra</h1>
      <p>I'm <span class="typed" data-typed-items="Web Developer"></span></p>
      <div class="social-links">
        <a href="https://github.com/manusiacoding" class="twitter" target="_blank"><i class="bx bxl-github"></i></a>
        <a href="https://web.facebook.com/fawwaz.saputra.739" class="facebook" target="_blank"><i
            class="bx bxl-facebook"></i></a>
        <a href="https://instagram.com/manusiacoding_" class="instagram" target="_blank"><i
            class="bx bxl-instagram"></i></a>
        <a href="https://www.linkedin.com/in/fawwazsaputra/" class="linkedin" target="_blank"><i
            class="bx bxl-linkedin"></i></a>
      </div>
    </div>
  </section><!-- End Hero -->

  <main id="main">

    <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>About</h2>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <img src="assets/img/profile.jpg" class="img-fluid w-60">
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content">
            <h3 class="mb-4">Fawwaz Hudzalfah saputra</h3>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>29 May 2002</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>(+62)&nbsp;821-1090-6990</span>
                  </li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Address:</strong> <span>Depok City, West Java,
                      Indonesian</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>20 Years Old</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Vocational High School</span>
                  </li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Major:</strong> <span>Software Engineering</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>manusiacoding29@gmail.com</span>
                  </li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Status:</strong> <span>Single</span></li>
                </ul>
              </div>
            </div>
            <p>
              IT Professional with 6 years of experience in software development and in creating innovative solutions to
              system issues. I am a team player with strong programming experience to build and operate secure systems.
              Able to explain complex software problems in easy-to-reach terms.
            </p>
          </div>
        </div>

      </div>
    </section><!-- End About Section -->

    <!-- ======= Skills Section ======= -->
    <section id="skills" class="skills section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Skills</h2>
        </div>

        <div class="row skills-content">

          <div class="col-lg-6">

            <div class="progress">
              <span class="skill">Laravel <i class="val">85%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="85">
                </div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">CodeIgniter <i class="val">85%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="85">
                </div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">JQuery <i class="val">95%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">Bootstrap <i class="val">95%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="progress">
              <span class="skill">ReactJS <i class="val">80%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">NodeJS <i class="val">80%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">Vb.NET <i class="val">95%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">MySQL / SQL Server <i class="val">95%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section><!-- End Skills Section -->

    <!-- ======= Resume Section ======= -->
    <section id="resume" class="resume">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Resume</h2>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <h3 class="resume-title">Summary</h3>
            <div class="resume-item pb-0">
              <h4>Fawwaz Hudzalfah Saputra</h4>
              <p><em>IT Professional with 6 years of experience in software development and in creating innovative
                  solutions to system issues. I am a team player with strong programming experience to build and operate
                  secure systems. Able to explain complex software problems in easy-to-reach terms.</em></p>
              <ul>
                <li>Depok City, West Java, Indonesian</li>
                <li>(+62) 821-1090-6990</li>
                <li>manusiacoding29@gmail.com</li>
              </ul>
            </div>

            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>SMK PGRI 1 DEPOK</h4>
              <h5>2017 - 2020</h5>
              <p><em>Software Engineering</em></p>
              <p>I graduated from SMK PGRI 1 DEPOK majoring in Software Engineering. I was taught the basics of
                programming, basic design, and basic networking. But in this department, it focuses more on the
                programming field.</p>
            </div>
          </div>
          <div class="col-lg-6">
            <h3 class="resume-title">Professional Experience</h3>
            <div class="resume-item">
              <h4>Programmer Analyst</h4>
              <h5>Jan 2021 - May 2022</h5>
              <p><em>PT Telkom Akses Indonesia</em></p>
              <ul>
                <li>Build / develop software espesically at the requirements, design stage and partly in the
                  constitution / implementation stage</li>
                <li>Create requirements document and software base on clients business process</li>
                <li>Create Database Design for the application to be built</li>
                <li>Build / develop a framework / library for use in software development by programmer</li>
              </ul>
            </div>

            <div class="resume-item">
              <h4>Back End Programmer</h4>
              <h5>May 2020 - Jan 2021</h5>
              <p><em>PT Telkomsel</em></p>
              <ul>
                <li>Developed data upload automation for the company</li>
                <li>Managed up to 3 projects or tasks at a given time while under pressure</li>
                <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                <li>Created 1 website to control the network per point in a specific city using ReactJS and NodeJS
                  technologies</li>
              </ul>
            </div>

            <div class="resume-item">
              <h4>Lead Programmer</h4>
              <h5>Jan 2017 - Jan 2020</h5>
              <p><em>PT Indotrading</em></p>
              <ul>
                <li>Reponsible for the technical specifications of the project and managin the overall code development
                  process</li>
                <li>Created reports from the Programmer Tasks for the User</li>
                <li>Lead the programming team responsible for making all the code control the project</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section><!-- End Resume Section -->

    <!-- ======= Portfolio Section ======= -->
    <section id="portfolio" class="portfolio section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Portfolio</h2>
        </div>

        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">Application</li>
              <li data-filter=".filter-web">Website</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/app.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>E-Commerce Application</h4>
                <p>Application</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/app.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox"
                    title=""><i class="bx bx-plus"></i></a>
                  <a href="app-details.html" class="portfolio-details-lightbox" data-glightbox="type: external"
                    title="Portfolio Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/agta.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>Agta Store</h4>
                <p>Website</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/agta.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox"
                    title=""><i class="bx bx-plus"></i></a>
                  <a href="agta-details.html" class="portfolio-details-lightbox" data-glightbox="type: external"
                    title="Portfolio Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/telkomsel.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>Jarvis</h4>
                <p>Website</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/telkomsel.jpg" data-gallery="portfolioGallery"
                    class="portfolio-lightbox" title=""><i class="bx bx-plus"></i></a>
                  <a href="jarvis-details.html" class="portfolio-details-lightbox" data-glightbox="type: external"
                    title="Portfolio Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/telkom.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>Pesanten Go Digital</h4>
                <p>Website</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/telkom.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox"
                    title=""><i class="bx bx-plus"></i></a>
                  <a href="telkom-details.html" class="portfolio-details-lightbox" data-glightbox="type: external"
                    title="Portfolio Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/storetelkom.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>Store Pesanten Go Digital</h4>
                <p>Website</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/storetelkom.jpg" data-gallery="portfolioGallery"
                    class="portfolio-lightbox" title=""><i class="bx bx-plus"></i></a>
                  <a href="store-telkom-details.html" class="portfolio-details-lightbox" data-glightbox="type: external"
                    title="Portfolio Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Portfolio Section -->

    <!-- ======= Services Section ======= -->
    <section id="services" class="services">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Awards</h2>
          <p>(Click certificate name to view it)</p>
        </div>

        <div class="row">

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue">
              <div class="icon">
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" stroke-width="0" fill="#f5f5f5"
                    d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174">
                  </path>
                </svg>
                <i class="bx bx-support bx-tada-hover"></i>
              </div>
              <h4><a href="https://drive.google.com/file/d/1sFbg9D79f4atI3kNyIM8zpMgl_sJys6M/view?usp=sharing"
                  target="_blank">IT Support Certificate</a></h4>
              <p>LifeSkill Certificate from Dinas Pendidikan Kota Depok</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in"
            data-aos-delay="200">
            <div class="icon-box iconbox-yellow ">
              <div class="icon">
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" stroke-width="0" fill="#f5f5f5"
                    d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426">
                  </path>
                </svg>
                <i class="bx bxl-javascript bx-tada-hover"></i>
              </div>
              <h4><a href="https://drive.google.com/file/d/1sBaJWBT-AJ_fmdOioEkQGFubOCjVm1eH/view?usp=sharing"
                  target="_blank">Javascript Programmer</a></h4>
              <p>Javascript Certificate from Better Programmer Company</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in"
            data-aos-delay="300">
            <div class="icon-box iconbox-black">
              <div class="icon">
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" stroke-width="0" fill="#f5f5f5"
                    d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781">
                  </path>
                </svg>
                <i class="bx bxl-unity bx-tada-hover"></i>
              </div>
              <h4><a href="https://drive.google.com/file/d/1s7V34DaLvRcfW2JO4f820R9LK9i8niXX/view?usp=sharing"
                  target="_blank">Mobile App & Game Developer</a></h4>
              <p>Mobile App & Game Developer Certificate from Dicoding Company</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box iconbox-blue">
              <div class="icon">
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" stroke-width="0" fill="#f5f5f5"
                    d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572">
                  </path>
                </svg>
                <i class="bx bxl-flutter bx-tada-hover"></i>
              </div>
              <h4><a href="https://drive.google.com/file/d/1gTblE46-5y874yZxFxQQmMnR0f829eoF/view?usp=sharing"
                  target="_blank">Flutter Developer</a></h4>
              <p>Flutter Developer Certificate from Salt Academy</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box iconbox-blue">
              <div class="icon">
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" stroke-width="0" fill="#f5f5f5"
                    d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572">
                  </path>
                </svg>
                <i class="bx bxl-flutter bx-tada-hover"></i>
              </div>
              <h4><a href="https://drive.google.com/file/d/1uV3iUye2k8TnfjlKQkInCSuZy5erFvGj/view?usp=sharing"
                  target="_blank">Flutter Developer</a></h4>
              <p>Flutter Developer Webinar Certificate from Edspert.id</p>
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Services Section -->

  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer">
    <div class="container">
      <h3>Fawwaz Hudzalfah Saputra</h3>
      <div class="social-links">
        <a href="https://github.com/manusiacoding" class="twitter" target="_blank"><i class="bx bxl-github"></i></a>
        <a href="https://web.facebook.com/fawwaz.saputra.739" class="facebook" target="_blank"><i
            class="bx bxl-facebook"></i></a>
        <a href="https://instagram.com/manusiacoding_" class="instagram" target="_blank"><i
            class="bx bxl-instagram"></i></a>
        <a href="https://www.linkedin.com/in/fawwazsaputra/" class="linkedin" target="_blank"><i
            class="bx bxl-linkedin"></i></a>
      </div>
      <div class="copyright">
        &copy;Copyright 2022 by <strong><span>MC TECHNOLOGY</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        Designed by <a href="https://manusiacoding.github.io/">Fawwaz Hudzalfah Saputra</a>
      </div>
    </div>
  </footer><!-- End Footer -->
</template>
