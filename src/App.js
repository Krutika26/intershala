import Header from './components/Header/Header'
import "C:/Users/karti/dashboard/src/App.css"
import DIV1 from './components/div1/div1'
import Contact from './components/div2/div2'


function App() {
  return (
    <div>
      <div className="dashboard"><h2>dashboard</h2><p className="color">monday 2 july 2021</p></div>
       <div><Header/></div>
       <div className="div1">
         <DIV1/>
       </div>
       <div className="div2">
         <Contact/>
       </div>
    </div>
  );
}

export default App;