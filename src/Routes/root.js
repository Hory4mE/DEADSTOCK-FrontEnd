// // Routes.js
// import React from 'react';
// import * as ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import App from '../Pages/App';
// import About from '../Pages/About';
// import Products from '../Pages/Products';
// function Routes() {
//     return (
//         <Router>
//                 <Route path="/" exact component={App} />
//                 <Route path="/About" component={About} />
//                 <Route path="/Products" component={Products} />
//         </Router>
//     );
// }

// export default Routes;

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`/contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`/contacts/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}
