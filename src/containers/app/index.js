import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import Live from '../live';
import Today from '../today';
import Teams from '../teams';
import Groups from '../groups';

const App = () => (
  <div>
    <div className="body_background body_background--morning " />
    <div className="body_background body_background--afternoon" />
    <div className="body_background body_background--evening" />
    <div className="body_background body_background--night active" />
    <noscript>Activez javascript pour accéder à l'application</noscript>
    <div className="wrapper">
      <header>
        <div>
          <div className="logo" />
          <h1>Le Mondial en Live</h1>
          <nav className="nav">
            <ul>
              <li>
                <Link to="/live">
                  <span className="live__led ledon" />
                  <span>Live</span>
                </Link>
              </li>
              <li>
                <Link to="/today">Matchs du jour</Link>
              </li>
              <li>
                <Link to="/">Resultats</Link>
              </li>
              <li>
                <Link to="/groupes">Groupes</Link>
              </li>
              <li>
                <Link to="/equipes">Equipes</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main id="react" className="container">
        <Route exact path="/" component={Home} />
        <Route exact path="/live" component={Live} />
        <Route exact path="/today" component={Today} />
        <Route exact path="/equipes" component={Teams} />
        <Route exact path="/groupes" component={Groups} />
      </main>
      <footer className="prodby">
        by{' '}
        <span className="glitch" data-text="LIVEPIXELZ">
          LIVEPIXELZ
        </span>
      </footer>
    </div>
    <div className="loading__wrapper">
      <div>
        <div className="logo" />
        <p>
          <span className="loading__text">
            Le Mondial{' '}
            <span aria-label="football" role="img">
              ⚽
            </span>{' '}
            <span arial-label="cup" role="img">
              🏆
            </span>{' '}
            <span aria-label="football" role="img">
              ⚽
            </span>{' '}
            en Live
          </span>
        </p>
      </div>
    </div>
  </div>
);
export default App;
