import Navbar from "./components/Navbar";
import TableNum from "./components/TableNum";
import './App.css';
import Calculator from "./components/Calculator";
import AdCalc from "./components/AdCalc";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/advanced-calculator" element={<AdCalc />} />
        <Route exact path="/simple-calculator" element={<Calculator />} />
        <Route exact path="/table" element={<TableNum />} />
      </Routes>
    </Router>
  );
}

const Home = () => (
  <>
    <div className="container">
      <div className="home-body">
        <div id="app">
          <div class="title">
            <div class="title-inner">
              <div class="cafe">
                <div class="cafe-inner">Welcome</div>
              </div>
              <div class="mozart">
                <div class="mozart-inner">to the App</div>
              </div>
            </div>
          </div>

          <div class="image">
            <img className="img" src='https://images.unsplash.com/photo-1616362355051-6a9f8c434fff?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzE0MTYzNQ&ixlib=rb-1.2.1&q=80&w=800&h=600' alt='' />
          </div>
        </div>
      </div>
    </div>
    {/* <a href="https://youtu.be/mBY62jtbMYM" target="_blank" data-keyframers-credit style="color: #000"></a> */}
    <script src="https://codepen.io/shshaw/pen/QmZYMG.js"></script>
  </>
);

export default App;