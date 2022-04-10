import React, {useState} from "react"
import './App.css';
function App() {
  const [altura,setAltura]= useState();
  const [peso,setPeso] = useState();
  const [result,setResult] =useState();
  console.log(peso)
  function calc(){
    let result= peso / (altura * altura)
    let formatedResult = result.toFixed(1)
    console.log(result.toFixed(1))
    if (formatedResult <= 18.5)
   setResult("abaixo do peso") 
    else if (formatedResult >= 18.5 && formatedResult <= 24.9)
   setResult("peso normal") 
    else if (formatedResult >= 25.0 && formatedResult <= 29.9)
   setResult( "Obessidade")
    else if (formatedResult >= 35.9 && formatedResult <= 39.9)
   setResult('Obessidade grau 2') 

  }


   
    return (

      <div
        className="calc">
        <h1>Para calcular o IMC(Índice de massa corporal) basta preencher os campos abaixo.</h1>
        <div className="caixa">
       
          
        <label htmlFor="Massa"></label>
        <input type="number" id="Massa" placeholder="0" onChange={(e)=> setPeso(e.target.value)} value={peso}/>
       
        <label htmlFor="Altura"></label>
        <input type="number" id="Altura" placeholder="Informe a sua altura..." onChange={(e)=>setAltura(e.target.value)}value={altura}/>
        </div>
        <div className="button">
           <button onClick={calc} >calcular</button>
          
        </div>
        <div className="resultado">  <p>{result}</p></div>
      
       
      </div>
      
    )
    
    
  
}

export default App;
