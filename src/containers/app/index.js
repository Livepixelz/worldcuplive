import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import Teams from '../teams';
import Groups from '../groups';

const App = () => (
  <div>
    <div className="body_background body_background--morning " />
    <div className="body_background body_background--afternoon" />
    <div className="body_background body_background--evening" />
    <div className="body_background body_background--night active" />
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div className="wrapper">
      <header>
        <div>
          <div className="logo" />
          <h1>LE MONDIAL DU SLIP</h1>
          <nav className="nav">
            <ul>
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
      <main>
        <section id="react" className="container">
          <main>
            <Route exact path="/ffs/" component={Home} />
            <Route exact path="/ffs/equipes" component={Teams} />
            <Route exact path="/ffs/groupes" component={Groups} />
          </main>
        </section>
      </main>
      <footer className="prodby">
        {' '}
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
          <span className="loading__text">CHARGEMENT</span>
        </p>
      </div>
    </div>
  </div>
);

export default App;
