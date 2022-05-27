import Inizio from './lezioni/15-suspense/inizio/index';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* LA PARTE COMMENTATA RIGUARDA LA LEZIONE 11-React-Router */}
      {/* <Router>
        <nav
          style={{
            border: '1px solid black',
            display: 'flex',
            justifyContent: 'space-around',
            marginBottom: '20px',
          }}
        >
          <Link className="on-hover" to="/">
            Home
          </Link>
          <Link className="on-hover" to="/about">
            About
          </Link>
          <Link className="on-hover" to="/profile">
            Profile
          </Link>
        </nav> */}
      <section className="container text-center my-3">
        <Inizio />
      </section>
      {/* </Router> */}
    </div>
  );
}

export default App;
