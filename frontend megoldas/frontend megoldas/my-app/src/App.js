import React from "react";
// Bootstrap CSS-t index.js vagy App.js-ben egyszer érdemes importálni
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"; // Saját stílusok pl.

const FernandoAlonso = () => {
  return (
    <>
      {/* 1. feladat: doctype - React nem használja */}
      {/* 2. feladat: lang="hu" - React nem kezeli a <html> taget, ezt az index.html-ben állítjuk */}

      {/* Fejléchez szükséges meta és link elemek az index.html-ben legyenek, itt csak a tartalom */}
      <div id="container">
        <section id="eletrajz">
          <header>
            <div className="fenykep">
              <img
                src="/Alonso.jpg"
                title="Fernando Alonso"
                alt="Fernando Alonso"
              />
              {/* 12. feladat: p */}
              <p className="kepalairas">
                Fernando Alonso
                <br />
                Fotó: Box Repsol | Flickr
              </p>
            </div>
            {/* 7. feladat: h1 */}
            <h1>Fernando Alonso</h1>
            {/* 8. feladat: h3 */}
            <h3>
              Oviedo, 1981. július 29. –
              <br />
              spanyol autóversenyző
            </h3>

            <p>
              2005, valamint 2006 Formula–1-es világbajnoka, egyben az eddigi
              harmadik legfiatalabb (Sebastian Vettel és Lewis Hamilton után) és
              egyetlen spanyol nemzetiségű Formula–1-es világbajnok. A 2018-as
              és a 2019-es Le Mans-i 24 órás verseny, valamint a 2019-es
              Daytonai 24 órás verseny győztese.
            </p>
          </header>
          <hr />
          {/* 9. feladat: p */}
          <p>
            2001-ben a Minardi csapattal került be a Forma 1-be, 2002-ben már a
            Renault tesztpilótája volt. 2005-ben és 2006-ban világbajnok lett a
            Renault-val. 2010-től 2014-ig az olasz Ferrari pilótája volt.
            2015-től a McLaren-Hondánál versenyzett. 2017. májusában részt vett
            a 101. Indy500-on. 2018 végén visszavonult a Forma 1-ből. 2018-ban
            és 2019-ben Nakajimával és Buemivel megnyerte a Le Mans-i 24 órás
            versenyt. 2019-ben Daytona 24 órás versenyt nyert. 2020 januárjában
            indult a Dakaron.
          </p>
        </section>
        <hr />
        <section>
          <nav className="navbar navbar-expand-md">
            <ul className="navbar-nav">
              <li className="nav-item mr-2">
                <a className="nav-link" href="#eletrajz">
                  Életrajz
                </a>
              </li>
              <li className="nav-item mr-2">
                <a className="nav-link" href="#legtobb">
                  Legtöbb versenyen indulók
                </a>
              </li>
              <li className="nav-item mr-2">
                <a className="nav-link" href="#dijai">
                  Díjai és érdekességek
                </a>
              </li>
              <li className="nav-item mr-2">
                <a className="nav-link" href="#fotok">
                  Fotók
                </a>
              </li>
            </ul>
          </nav>
        </section>
        <hr />
        <section id="legtobb">
          {/* 8. feladat: h2 */}
          <h2>Legtöbb versenyen induló versenyzők</h2>

          {/* 10. feladat: class */}
          <table className="table table-striped">
            <thead>
              <tr>
                {/* 11. feladat: th */}
                <th>S.</th>
                <th>Versenyző</th>
                <th>Évek</th>
                <th>Részvételek</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Kimi Räikkönen</td>
                <td>2001–2009, 2012–</td>
                <td>347</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Fernando Alonso</td>
                <td>2001–2018, 2021-</td>
                <td>331</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Rubens Barrichello</td>
                <td>1993–2011</td>
                <td>326</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Jenson Button</td>
                <td>2000–2017</td>
                <td>309</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Michael Schumacher</td>
                <td>1991–2006, 2010–2012</td>
                <td>308</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Lewis Hamilton</td>
                <td>2007–</td>
                <td>277</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Felipe Massa</td>
                <td>2002–2017</td>
                <td>272</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Sebastian Vettel</td>
                <td>2007–</td>
                <td>269</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Riccardo Patrese</td>
                <td>1977–1993</td>
                <td>257</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Jarno Trulli</td>
                <td>1997–2011</td>
                <td>256</td>
              </tr>
            </tbody>
          </table>
        </section>
        <hr />
        <div className="row">
          <section id="dijai" className="col-6">
            {/* 8. feladat: h2 */}
            <h2>Díjai</h2>

            {/* 9. feladat: ul, li */}
            <ul>
              <li>Bahreini Nagydíj 2005, 2006, 2010</li>
              <li>Ausztrál Nagydíj 2006</li>
              <li>Malájziai Nagydíj 2005, 2007, 2012</li>
              <li>Kínai Nagydíj 2005, 2013</li>
              <li>Spanyol Nagydíj 2006, 2013</li>
              <li>Monacói Nagydíj 2006, 2007</li>
              <li>Kanadai Nagydíj 2006</li>
              <li>Európai Nagydíj 2005, 2007, 2012</li>
              <li>Brit Nagydíj 2006, 2011</li>
              <li>Német Nagydíj 2005, 2010, 2012</li>
              <li>Magyar Nagydíj 2003</li>
              <li>Olasz Nagydíj 2007, 2010</li>
              <li>Szingapúri Nagydíj 2008, 2010</li>
              <li>Japán Nagydíj 2006, 2008</li>
              <li>Koreai Nagydíj 2010</li>
              <li>Francia Nagydíj 2005</li>
              <li>San Marino-i Nagydíj 2005</li>
            </ul>
          </section>
          <section id="erdekessegek" className="col-6">
            {/* 8. feladat: h2 */}
            <h2>Érdekességek</h2>

            {/* 9. feladat: ul, li */}
            <ul>
              <li>64 kg és 1,71 cm magas,</li>
              <li>ő az egyetlen spanyol nemzetiségű Forma 1-es világbajnok,</li>
              <li>hobbija a bűvészkedés, emiatt hívják Magic Alonsonak,</li>
              <li>kedvenc festője: Domingo Zapata,</li>
              <li>allergiás a pollenre,</li>
              <li>szeret fotózni,</li>
              <li>
                Fernando nagy focirajongó is. Kedvenc csapata a Real Madrid.
                Svájcban egy másodosztályú csapatban szokott játszani,
              </li>
              <li>tud és szeret is főzni.</li>
            </ul>
          </section>
        </div>
        <hr />
        <section id="fotok">
          {/* 8. feladat: h2 */}
          <h2>Fotók</h2>
          <div className="row">
            <div className="col-md-3">
              <img className="rounded" src="./1.jpg" alt="foto1" />
            </div>
            <div className="col-md-3">
              <img className="rounded" src="./2.jpg" alt="foto2" />
            </div>
            <div className="col-md-3">
              <img className="rounded" src="./3.jpg" alt="foto3" />
            </div>
            <div className="col-md-3">
              <img className="rounded" src="./4.jpg" alt="foto4" />
            </div>
            <div className="col-md-3">
              <img className="rounded" src="./5.jpg" alt="foto5" />
            </div>
            <div className="col-md-3">
              <img className="rounded" src="./6.jpg" alt="foto6" />
            </div>
            <div className="col-md-3">
              <img className="rounded" src="./7.jpg" alt="foto7" />
            </div>
          </div>
        </section>
        <hr />
        <section id="lablec">
          <footer>
            Forrás: {/* 17. feladat: a */}
            <a
              href="https://hu.wikipedia.org/wiki/Fernando_Alonso"
              target="_blank"
              rel="noreferrer"
            >
              Wikipédia
            </a>
          </footer>
        </section>
      </div>
    </>
  );
};

export default FernandoAlonso;
