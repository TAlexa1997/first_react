import './App.css';
import Card from './component/Card';
import { lista } from './modell/adatok';

function App() {
  // ide irjuk e azt amit megakarunk jelenite!!
  // class helyett className van
  function kattintas(id){
    console.log("szülőkomponens",id-1)
  }
  return (
    // ami ebbe van az a JSX!!!
    //html
    //componensek
    //javascript kódokat
    // egyetlen egy div lehet benne
    // a lent üres kacsacsörrel tuduk kettő gyökeréleme lehet!  pl.: div,a
    <> 
    <div className="App">
      <header className="App-header">
        <h1>Első React projectem</h1>
      </header>
      <article className="row">
        {
          lista.map((elem,index)=>{
            return(
              <Card obj={elem} key={index} kattintas={kattintas}/>
            )
          }
          )
        }
     
      
      </article>
    </div>
    
    </>
  );
}

export default App;
