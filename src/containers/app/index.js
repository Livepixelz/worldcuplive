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
          <h1>Le Mondial ⚽ 🏆 du Slip️</h1>
          <nav className="nav">
            <ul>
              <li>
                <Link to="/ffs/live">
                  <span className="live__led ledon" />
                  <span>Live</span>
                </Link>
              </li>
              <li>
                <Link to="/ffs/today">Matchs du jour</Link>
              </li>
              <li>
                <Link to="/ffs/">Resultats</Link>
              </li>
              <li>
                <Link to="/ffs/groupes">Groupes</Link>
              </li>
              <li>
                <Link to="/ffs/equipes">Equipes</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main id="react" className="container">
        <Route exact path="/ffs/" component={Home} />
        <Route exact path="/ffs/live" component={Live} />
        <Route exact path="/ffs/today" component={Today} />
        <Route exact path="/ffs/equipes" component={Teams} />
        <Route exact path="/ffs/groupes" component={Groups} />
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
          <span className="loading__text">LE MONDIAL ⚽ 🏆 DU SLIP</span>
        </p>
      </div>
    </div>
  </div>
);
export default App;
