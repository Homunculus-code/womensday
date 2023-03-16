import styles from './App.module.css';
import { useState, useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const E1 = {
    "name": "Calculate the Power",
    "link": "https://www.hackerearth.com/practice/math/number-theory/basic-number-theory-1/practice-problems/algorithm/calculate-the-power/"
}

const E2 = {
  "name": "Mark the Answer",
  "link": "https://www.hackerearth.com/practice/data-structures/arrays/1-d/practice-problems/algorithm/mark-the-answer-1/"
}

const E3 = 
  {
    "name": "Going to Office",
    "link": "https://www.hackerearth.com/practice/basic-programming/operators/basics-of-operators/practice-problems/algorithm/going-to-office-e2ef3feb/"
  }


const E4 = 
  {
    "name": "The First Meeting",
    "link": "https://www.hackerearth.com/practice/math/number-theory/primality-tests/practice-problems/algorithm/little-shino-and-prime-difference-38c91b0d/"
  }


const M1 = 
  {
    "name":"Ali and Helping innocent people",
    "link": "https://www.hackerearth.com/practice/basic-programming/input-output/basics-of-input-output/practice-problems/algorithm/cartag-948c2b02/"
  }


const M2 = 
  {
    "name":"Add operator and fraction",
    "link": "https://www.hackerearth.com/practice/math/number-theory/totient-function/practice-problems/algorithm/kasrioo-145db44b/"
  }


const M3 = 
  {
    "name": "Does it divide?",
    "link": "https://www.hackerearth.com/practice/math/number-theory/primality-tests/practice-problems/algorithm/does-it-divide-3c60b8fb/"
  }


const M4 = 
  {
    "name": "Help Oz",
    "link": "https://www.hackerearth.com/practice/math/number-theory/primality-tests/practice-problems/algorithm/does-it-divide-3c60b8fb/"
  }

const D2 = 
  {
    "name": "Prime String",
    "link": "https://www.hackerearth.com/practice/math/number-theory/primality-tests/practice-problems/algorithm/primestring/"
  }


const D1 = 
  {
    "name": "Roy and Rangoli",
    "link": "https://www.hackerearth.com/practice/math/number-theory/primality-tests/practice-problems/algorithm/roy-and-rangoli-1/"
  }



const App = () => {
    const [n, setN] = useState(-1);
    useEffect(() => {
      AOS.init();
    }, []);
    const killme = num => {
      setN(num);
    }
    if (n == 0){
      return(
        <>
        <div style = {{display: "flex", flexDirection: "column", alignItems: "center", gap: "25px"}}>
        <h1 className = {styles.heading}>WOMANIA</h1>
        <div className = {styles.container}>
          <button className = {styles.card1}>
            <div className = {styles.thetext}>
              <a target = "_blank" href = {E1.link}>{E1.name}</a>
              <br />< br />
              <a target = "_blank" href = {E2.link}>{E2.name}</a>
              <br />< br />
              <a target = "_blank" href = {M1.link}>{M1.name}</a>
              <br />< br />
              <a target = "_blank" href = {M2.link}>{M2.name}</a>
              <br />< br />
              <a target = "_blank" href = {D1.link}>{D1.name}</a>
              <br />< br />
            </div>
          </button> 
          <button className = {styles.cardturned}></button> 
          <button className = {styles.cardturned}></button> 
          <button className = {styles.cardturned}></button> 
        </div>
        </div>
        </>
      )
    }
    else if (n == 1){
      return(
        <>
        <div style = {{display: "flex", flexDirection: "column", alignItems: "center", gap: "25px"}}>
        <h1 className = {styles.heading}>   WOMANIA</h1>
        <div className = {styles.container}>
          <button className = {styles.cardturned}></button> 
          <button className = {styles.card2} onClick = {() => killme(1)}>
            <div className = {styles.thetext}>
              <a target = "_blank" href = {E3.link}>{E3.name}</a>
              <br />< br />
              <a target = "_blank" href = {E4.link}>{E4.name}</a>
              <br />< br />
              <a target = "_blank" href = {M3.link}>{M3.name}</a>
              <br />< br />
              <a target = "_blank" href = {M4.link}>{M4.name}</a>
              <br />< br />
              <a target = "_blank" href = {D2.link}>{D2.name}</a>
              <br />< br />
            </div>
          </button> 
          <button className = {styles.cardturned}></button> 
          <button className = {styles.cardturned}></button> 
        </div>
        </div> 
        </>
      )
    }
    else if (n == 2){
      return(
        <>
        <div style = {{display: "flex", flexDirection: "column", alignItems: "center", gap: "25px"}}>
        <h1 className = {styles.heading}>WOMANIA</h1>
        <div className = {styles.container}>
        <button className = {styles.cardturned}></button> 
        <button className = {styles.cardturned}></button> 
          <button className = {styles.card3} onClick = {() => killme(2)}>
          <div className = {styles.thetext}>
              <a target = "_blank" href = {E1.link}>{E1.name}</a>
              <br />< br />
              <a target = "_blank" href = {E3.link}>{E3.name}</a>
              <br />< br />
              <a target = "_blank" href = {M2.link}>{M2.name}</a>
              <br />< br />
              <a target = "_blank" href = {M3.link}>{M3.name}</a>
              <br />< br />
              <a target = "_blank" href = {D1.link}>{D1.name}</a>
              <br />< br />
            </div>
          </button> 
          <button className = {styles.cardturned}></button> 
        </div>
        </div>
        </>
      )
    }
    else if (n == 3){
      return(
        <>
        <div style = {{display: "flex", flexDirection: "column", alignItems: "center", gap: "25px"}}>
        <h1 className = {styles.heading}>WOMANIA</h1>
        <div className = {styles.container}>
        <button className = {styles.cardturned}></button>  
        <button className = {styles.cardturned}></button>  
        <button className = {styles.cardturned}></button> 
          <button className = {styles.card4} onClick = {() => killme(3)}>
            <div className = {styles.thetext}>
              <a target = "_blank" href = {E2.link}>{E2.name}</a>
              <br />< br />
              <a target = "_blank" href = {E4.link}>{E4.name}</a>
              <br />< br />
              <a target = "_blank" href = {M4.link}>{M4.name}</a>
              <br />< br />
              <a target = "_blank" href = {M1.link}>{M1.name}</a>
              <br />< br />
              <a target = "_blank" href = {D2.link}>{D2.name}</a>
              <br />< br />
            </div></button> 
        </div>
        </div>
        </>
      )
    }
    return(
      <>
      <div style = {{display: "flex", flexDirection: "column", alignItems: "center", gap: "5px"}}>
        <h1 className = {styles.heading}>WOMANIA</h1>
        <div className = {styles.container}>
          <div data-aos="flip-right"><button className = {styles.card1} onClick = {() => killme(0)}></button></div>
          <div data-aos="flip-right"><button className = {styles.card2} onClick = {() => killme(1)}></button></div>
          <div data-aos="flip-right"><button className = {styles.card3} onClick = {() => killme(2)}></button></div>
          <div data-aos="flip-right"><button className = {styles.card4} onClick = {() => killme(3)}></button></div>
        </div>
      </div>
      </>
    )
}

export default App;