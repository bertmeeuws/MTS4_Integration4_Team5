import Head from "next/head";
import Nav from "../components/Layout/Nav";
import CustomCursor from "../components/CustomCursor/CustomCursor";
import { useStoreState } from "easy-peasy";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Home() {
  //DIT IS DE HOME PAGINA


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <CustomCursor />
      
      <Head>
        <title>Home - BuddyGram</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/smiley.png" />
      </Head>
      
      <Nav/>

        <main className="home__container">
          <article className="header__container">
            <div className="header__content">
              <div className="header__box">
                
                <div className="header__intro box__shadow">
                  <h2 className="title__l-bold"><mark className="mark-red">wapen</mark> de nieuwe generatie tegen cyberpesten</h2>
                  <div className="spacer__s"></div>
                  <p className="text__m-normal text__with">Een beleving vol valstrikken die zich schuilen in de social media van tegenwoordig.</p>
                </div>
                
                <div className="buttons__container">
                  <Link href="/register">
                    <span className="button__secondary">hoe werkt het?</span>
                  </Link>
                  <Link href="/register">
                  <span className="button__primary">start het spel</span>
                  </Link>
                </div>

              </div>
                
                <div className="header__img">
                  <Image
                    src="/assets/img/header_illu.svg"
                    width={456}
                    height={438}
                    alt="Illustratie van een container"
                  />
                </div>

                <div className="image__grid">
                  <Image
                    src="/assets/img/headerGrid.svg"
                    width={594}
                    height={528}
                    alt="Illustratie van een container"
                  />
                </div>

                <div className="image__arrowDown">
                  <Image
                    src="/assets/img/arrowDown.svg"
                    width={30}
                    height={51}
                    alt="pijltje naar onder"
                  />
                </div>
              
            </div>

            <div className="marquee__container">
              <div className="marquee__scrolling title__s-bold">“Wat een lelijke foto!” - “Hé, vuurtoren!” - “Je posts boeien niemand.” - “De mooie foto’s waren op zeker?” - “Met zo’n neus kan je een brood snijden!” -</div>
              <div className="marquee__scrolling title__s-bold" aria-hidden="true">“Wat een lelijke foto!” - “Hé, vuurtoren!” - “Je posts boeien niemand.” - “De mooie foto’s waren op zeker?” - “Met zo’n neus kan je een brood snijden!” -</div>
            </div>

          </article>
          
          <div className="info__container-1">
            
            <article className="info__container-left">
              <span className="text__m-bold text__blue">Hoe werkt het?</span>
              <div className="spacer__s"></div>
              <h2 className="title__m-bold">Leer jongeren omgaan met verschillende online situaties met deze <mark className="mark-blue">interactieve</mark> beleving.</h2>
              <div className="spacer__s"></div>
              <p className="text__m-normal text__with">De 13 tot 15 jarigen gaan met verschillende scenario’s aan de slag om zo de negatieve kant van social media te leren kennen.</p>
            </article>

            <div className="image__lightning">
              <Image
                src="/assets/img/lightning.svg"
                width={312}
                height={562}
                alt="bliksem stroke afbeelding"
              />
            </div>

          </div>
            
          <div className="lightningDevider__container">
            <img
              src="/assets/img/lightningDevider.svg"
              alt="bliksem stroke afbeelding"
              className="lightningDevider"
            />
          </div>
            
          <div className="info__wrapper-blue">
            
            <div className="info__container-2">
              
              <article className="info__container-center">
                <span className="text__m-bold text__white">De gevolgen van cyberpesten</span>
                <div className="spacer__s"></div>
                <h2 className="title__m-bold text__white">"Hoe <mark className="mark-turquoise">10</mark> minuten op instagram mijn dag verpestte.”</h2>
                <div className="spacer__s"></div>
                <p className="text__m-normal text__white">Katrien, 13 jaar</p>
              </article>

            </div>

          </div>

          <div className="info__wrapper-yellow">

            <div className="info__container-3">

              <div className="car__container box__shadow">
                
                <div className="car__top">
                  
                  <p className="title__s-bold">stappen tot succes</p>
                  
                  <div className="car__cross">
                    <Image
                      src="/assets/img/crossBlack.svg"
                      width={25}
                      height={25}
                      alt="kruisje om kader af te sluiten"
                    />
                  </div>
                </div>

                <div className="car__info">
                  <Slider {...settings}>
                    <div>
                      <h2 className="title__m-bold">1: <mark className="mark-blue">registreer</mark> je als leerkracht.</h2>
                      <div className="spacer__s"></div>
                      <p className="text__m-normal text__with">Maak een account aan als leerkracht en krijg toegang tot het paneel. Star daar een nieuwe ervaring voor jouw leerlingen</p>
                    </div>
                    <div>
                      <h2 className="title__m-bold">2:<mark className="mark-blue">registreer</mark> je als leerkracht.</h2>
                      <div className="spacer__s"></div>
                      <p className="text__m-normal text__with">Maak een account aan als leerkracht en krijg toegang tot het paneel. Star daar een nieuwe ervaring voor jouw leerlingen</p>
                    </div>
                    <div>
                      <h2 className="title__m-bold">3:<mark className="mark-blue">registreer</mark> je als leerkracht.</h2>
                      <div className="spacer__s"></div>
                      <p className="text__m-normal text__with">Maak een account aan als leerkracht en krijg toegang tot het paneel. Star daar een nieuwe ervaring voor jouw leerlingen</p>
                    </div>
                    <div>
                      <h2 className="title__m-bold">4: <mark className="mark-blue">registreer</mark> je als leerkracht.</h2>
                      <div className="spacer__s"></div>
                      <p className="text__m-normal text__with">Maak een account aan als leerkracht en krijg toegang tot het paneel. Star daar een nieuwe ervaring voor jouw leerlingen</p>
                    </div>
                    <div>
                      <h2 className="title__m-bold">5: <mark className="mark-blue">registreer</mark> je als leerkracht.</h2>
                      <div className="spacer__s"></div>
                      <p className="text__m-normal text__with">Maak een account aan als leerkracht en krijg toegang tot het paneel. Star daar een nieuwe ervaring voor jouw leerlingen</p>
                    </div>
                  </Slider>
                </div>
          
                {/* <div className="car__nav-container">
                  <span className="car__nav-item title__s-bold">1</span>
                  <span className="car__nav-item title__s-bold">2</span>
                  <span className="car__nav-item title__s-bold">3</span>
                  <span className="car__nav-item title__s-bold">4</span>
                </div> */}

              </div>

              <div className="image__gridYellow">
                <img
                  className="gridYellow"
                  src="/assets/img/gridYellow.svg"
                  width={528}
                  height={671}
                  alt="grid illustratie"
                />
              </div>
              
              <div className="spacer__l"></div>

              <article className="info__container-left">
                <span className="text__m-bold text__blue">Volle controle</span>
                <div className="spacer__s"></div>
                <h2 className="title__m-bold">Als <mark className="mark-blue">leerkracht</mark> heb je zicht op hoe de leerlingen presteren.</h2>
                <div className="spacer__s"></div>
                <p className="text__m-normal text__with">Via het leerkrachtenpaneel kan je ‘Buddy or Bully’ opstarten en delen met je studenten. Daarnaast heb je ook zicht op de resultaten van de studenten en kan je de focus van de lessen leggen waar nodig.</p>
              </article>

              <div className="spacer__m"></div>

              <div className="buttons__container">
                <Link href="/register">
                  <span className="button__primary">login als leerkracht</span>
                </Link>
              </div>

            </div>

            <div className="image__blocksYellow">
              <Image
                src="/assets/img/blocksYellow.svg"
                width={500}
                height={300}
                alt="gele blokjes illustratie"
              />
            </div>

          </div>

          <div className="info__wrapper-white">

            <div className="info__container-4">

              <article className="info__container-center">
                <span className="text__m-bold text__red">De kracht van reflectie</span>
                <div className="spacer__s"></div>
                <h2 className="title__m-bold">Neem vervolgens de kans om er met de leerlingen <mark className="mark-red2">openhartig</mark> over te spreken</h2>
              </article>

            </div>

          </div>

          <div className="lightningDevider__container">
            <img
              src="/assets/img/lightningDevider.svg"
              alt="bliksem stroke afbeelding"
              className="lightningDevider"
            />
          </div>

          <div className="info__wrapper-blue">

            <div className="grid-blue"></div>
            
            <div className="info__container-5">

              <article className="info__container-center">
                <h2 className="title__l-bold text__white">"Buddy or Bully is <mark className="mark-yellow2">helemaal</mark> gratis</h2>
                <div className="spacer__s"></div>
                <p className="text__m-normal text__white">Als school en leerkracht hoef je niets te betalen. Je krijgt meteen toegang tot een dashboard waarop je als leerkracht het spel kan opstarten voor de studenten.</p>
                <div className="spacer__m"></div>
              </article>

              <div className="buttons__container-center">
                <Link href="/register">
                  <span className="button__primary">login als leerkracht</span>
                </Link>
              </div>

            </div>
          </div>
        </main>

        <footer className="footer__container">
          
          <div className="footer__wrapper">
            <p className="title__m-bold text__white">intergration 4</p>
            <p className="title__m-bold text__white">devine</p>
          </div>

        </footer>
        
        
        
        
        
        
        
        
        {/* <main className={styles.main}>
          <section className="header__home">
            <div style={{ position: "relative" }} className="wrapper">
              <div className="header__whiteBox-container">
                <div className="header__whiteBox-outside">
                  <div className="header__whiteBox-inside">
                    <h1 className="h1">
                      Wapen de nieuwe generatie tegen cyberpesten
                    </h1>
                    <p>
                      Leer jongeren omgaan met verschillende online situaties
                      dankzij deze interactieve beleving!
                    </p>
                  </div>
                </div>
              </div>
              <div className="header__image-container">
                <Image
                  src="/assets/img/header_illu.svg"
                  width={456}
                  height={438}
                  alt="Illustratie van een container"
                />
              </div>
            </div>
          </section>
          <div className="black-bar-infinite">
            <Marquee />
          </div>
        </main> */}
      
    </>
  );
}
