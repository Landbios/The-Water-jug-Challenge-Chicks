import React from 'react'
import { useState , useEffect } from 'react'
import Error from './Error';


const Ui = ({Steps, setSteps}) => {
    
    const [Desired, setDesired] = useState(0);
    const [Maxjug1, setMaxjug1] = useState(0);
    const [Maxjug2, setMaxjug2] = useState(0);
   
    const [Errorbool, setErrorbool] = useState(false);
    const[ErrorMessage,setErrorMessage] = useState('')

    const  HandleValues = () =>  {
    
        if (Desired <= 0 || Maxjug1 <= 0  || Maxjug2 <= 0){
           
           setErrorbool(true);
           setErrorMessage('The values should greater or equal than zero');
        }
        else if(Desired > Maxjug1 && Desired > Maxjug2 ){
           
            setErrorbool(true);
            setErrorMessage('The desired amount of water should be less or equal than the capacity of Jug 1 or Jug 2');
        }

        else if(Number.isInteger(Desired)!= true || Number.isInteger(Maxjug1) != true || Number.isInteger(Maxjug2) != true){
            setErrorbool(true);
            setErrorMessage('All values should be integers');
        }
        else if(Maxjug1 == Maxjug2){
            setErrorbool(true);
            setErrorMessage('The maximum amount of Jug 1 and Jug 2 cant be equal');
        }
        else{
            setSteps([]);
            let jug1 = 0;
            let jug2 = 0;
            let greaterjug = 0;
            setErrorbool(false);
            setErrorMessage('');
         
            if(Maxjug1 > Maxjug2){
                greaterjug = Maxjug1;
                console.log(greaterjug);

                if((Number.isInteger(Desired / 2) != true && (Number.isInteger(Maxjug1 / 2) == true && Number.isInteger(Maxjug2 /2) == true )) == true || ((Number.isInteger(Desired / 2) == true && (Number.isInteger(Maxjug1 / 2) != true && Number.isInteger(Maxjug2 /2) != true )) )&& Maxjug1 != 1 && Maxjug2 !=1 && Maxjug1 != Desired && Maxjug2 != Desired && (Number.isInteger(Desired / Maxjug1)) == false && (Desired / Maxjug2) == false  ){
                    setErrorbool(true);
                    console.log(Number.isInteger(Desired / 2))
                    setErrorMessage('Theres is not a posible solution for this values');
                }
                else if(Maxjug1 != Desired && Maxjug2 != Desired && (Number.isInteger(Desired /2) != true && (Number.isInteger((greaterjug - Maxjug2) /2) == true ) ) || (Number.isInteger(Desired /2) == true && (Number.isInteger((greaterjug - Maxjug2) / 2) !=true )) && Maxjug1 != 1 && Maxjug2 !=1 && Maxjug1 != Desired && Maxjug2 != Desired && (Number.isInteger(Desired / Maxjug1)) == false && (Number.isInteger(Desired / Maxjug2)) == false ){
                    setErrorbool(true);
                    console.log(Maxjug2 == Desired);
                   
                    setErrorMessage('Theres is not a posible solution for this values a');
                }

                

                else{
                    let fsteps =[];
                    while((jug1 != Desired && jug2 != Desired)){
                        const StepObject ={
               


                        }
                     
                        if((jug2 == 0 && Maxjug1 != Desired && (Maxjug1 - Desired) == Math.abs(Maxjug2 - Desired) != true && Maxjug1 - Maxjug2 != Desired)){
                            jug2 = Maxjug2;
                            jug1 = jug1;
                            StepObject.Jug1 = jug1;
                            StepObject.Jug2 = Maxjug2;
                           StepObject.Action = 'Fill Jug 2';
                           StepObject.Desired = Desired;
                           console.log(jug1,jug2,StepObject.Action)
                           fsteps.push(StepObject);
                           
                        
                        }
                        else if( jug2 == Maxjug2 && jug1 != Maxjug1 && jug2 + jug1 < Maxjug1){
                            jug1 = jug1 + jug2;
                            jug2 = 0;
                            
                            StepObject.Jug1 = jug1;
                           StepObject.Jug2 = 0;
                           StepObject.Action = 'Transfer water from jug 2 to 1';
                           StepObject.Desired = Desired;
                           console.log(jug1,jug2,StepObject.Action);
                           fsteps.push(StepObject);
                           

                        }
                        else if( jug2 + jug1 > Maxjug1 && jug1 < Maxjug1){
                            jug2 = jug2 + jug1 - Maxjug1;
                            jug1 = jug1 + (Maxjug2 - jug2)
                            StepObject.Jug2 = jug2;
                           StepObject.Jug1 = jug1;
                           StepObject.Action = 'Transfer water from jug 2 to 1';
                           StepObject.Desired = Desired;
                           console.log(jug1,jug2,StepObject.Action)
                           fsteps.push(StepObject);
                           

                        }

                        else if((Maxjug1 - Desired) == Math.abs(Maxjug2 - Desired) && jug1 == Maxjug1 && jug2 == 0){
                            jug1 = jug1 - Maxjug2;
                            jug2 = Maxjug2;
                            StepObject.Jug1 = jug1;
                            StepObject.Jug2 =jug2;
                            StepObject.Action = 'transfer jug 1 water to jug 2';
                            StepObject.Desired = Desired;
                            fsteps.push(StepObject);
                            console.log(jug1,jug2,StepObject.Action)
                        }
                        else if((Maxjug1 - Desired) == Math.abs(Maxjug2 - Desired) && jug1 == Maxjug1 && jug2 != 0){
                            jug1 = jug1 - Math.abs(Maxjug2 - jug2);
                            jug2 = Maxjug2;
                            StepObject.Jug1 = jug1;
                            StepObject.Jug2 =jug2;
                            StepObject.Action = 'transfer jug 1 water to jug 2';
                            StepObject.Desired = Desired;
                            fsteps.push(StepObject);
                            console.log(jug1,jug2,StepObject.Action)
                        }

                        

                        else if((Maxjug1 - Desired) == Math.abs(Maxjug2 - Desired) && jug2 == Maxjug2){
                            jug2 = 0;
                            jug1 = jug1;
                            StepObject.Jug1 = jug1;
                            StepObject.Jug2 =jug2;
                            StepObject.Action = 'Empty Jug 2';
                            StepObject.Desired = Desired;
                            fsteps.push(StepObject);
                            console.log(jug1,jug2,StepObject.Action)

                        }

                        else if(jug2 == 0 && jug1 != 0){
                            jug2 = Maxjug2;
                            jug1 = jug1 - Maxjug2;
                            
                            StepObject.Jug1 = jug1;
                            StepObject.Jug2 =jug2;
                            StepObject.Action = 'transfer jug 1 water to jug 2';
                            StepObject.Desired = Desired;
                            fsteps.push(StepObject);
                            console.log(jug1,jug2,StepObject.Action)

                        }

                        else if((jug1 - jug2 == Desired)){
                            jug1 = jug1 - jug2;
                            jug2 = Maxjug2;
                            StepObject.Jug1 = jug1;
                            StepObject.Jug2 =jug2;
                            StepObject.Action = 'transfer jug 1 water to jug 2';
                            StepObject.Desired = Desired;
                            fsteps.push(StepObject);
                            console.log(jug1,jug2,StepObject.Action)
                            
                        }
                        else if ((Maxjug1 - Desired) == Math.abs(Maxjug2 - Desired) && jug1 == 0){
                            jug1 = Maxjug1;
                            jug2 = jug2;
                            StepObject.Jug1 = Maxjug1;
                            StepObject.Jug2 = jug2
                            StepObject.Action = 'Fill Jug 1';
                            StepObject.Desired = Desired;
                            fsteps.push(StepObject);
                            console.log(jug1,jug2,StepObject.Action)
                        }
                        else if(Maxjug1 == Desired){
                            jug1 = Maxjug1;
                            jug2 = jug2;
                            StepObject.Jug1 = jug1;
                            StepObject.Jug2 = jug2
                            StepObject.Action = 'Fill Jug 1';
                            StepObject.Desired = Desired;
                            fsteps.push(StepObject);
                            console.log(jug1,jug2,StepObject.Action)

                        }

                        else if(Maxjug2 == Desired){
                            jug2 = Maxjug2;
                            jug1 = jug1;
                            StepObject.Jug1 = jug1;
                            StepObject.Jug2 = jug2
                            StepObject.Action = 'Fill Jug 2';
                            StepObject.Desired = Desired;
                            fsteps.push(StepObject);
                            console.log(jug1,jug2,StepObject.Action)

                        }

                        else if( Maxjug1 - Maxjug2 == Desired){
                            jug1 = Maxjug1;
                            jug2 = jug2;
                            StepObject.Jug1 = jug1;
                            StepObject.Jug2 = jug2
                            StepObject.Action = 'Fill Jug 1';
                            StepObject.Desired = Desired;
                            fsteps.push(StepObject);
                            console.log(jug1,jug2,StepObject.Action)

                        }
                        else{
                            setErrorbool(true);
                            jug1 = Desired;
                   
                            setErrorMessage('Theres is not a posible or optimal solution for this values');
                        }
                     



                    }
                    setSteps(fsteps);
                }
            
            }
            else if(Maxjug2 > Maxjug1){

                greaterjug = Maxjug2;
              

                if((Number.isInteger(Desired / 2) != true && (Number.isInteger(Maxjug1 / 2) == true && Number.isInteger(Maxjug2 /2) == true )) == true || ((Number.isInteger(Desired / 2) == true && (Number.isInteger(Maxjug1 / 2) != true && Number.isInteger(Maxjug2 /2) != true ))) && Maxjug1 != 1 && Maxjug2 !=1 && Maxjug1 != Desired && Maxjug2 != Desired && (Number.isInteger(Desired / Maxjug1)) == false && (Desired / Maxjug2) == false   ){
                    setErrorbool(true);
                    
                    setErrorMessage('Theres is not a posible solution for this values');
                }
                else if((Number.isInteger(Desired /2) != true && (Number.isInteger((greaterjug - Maxjug1) /2) ==true ) ) || (Number.isInteger(Desired /2) == true && (Number.isInteger((greaterjug - Maxjug1) / 2 ) !=true )) && Maxjug1 != 1 && Maxjug2 !=1 && Maxjug1 != Desired && Maxjug2 != Desired && (Number.isInteger(Desired / Maxjug1)) == false && (Desired / Maxjug2) == false){
                    
                    
                    setErrorbool(true);
                   
                    setErrorMessage('Theres is not a posible solution for this values');
                }
                else{
                let fsteps =[];
                    while((jug1 != Desired && jug2 != Desired)){
                        const StepObject ={
               


                        }
                     
                        if((jug1 == 0 && Maxjug2 != Desired && (Maxjug2 - Desired) == Math.abs(Maxjug1 - Desired) != true && Maxjug2 - Maxjug1 != Desired)){
                            jug1 = Maxjug1;
                            jug2 = jug2;
                            StepObject.Jug1 = jug1;
                            StepObject.Jug2 = jug2;
                           StepObject.Action = 'Fill Jug 1';
                           StepObject.Desired = Desired;
                           console.log(jug1,jug2,StepObject.Action)
                           fsteps.push(StepObject);
                           
                        
                        }
                        else if( jug1 == Maxjug1 && jug2 != Maxjug2 && jug1 + jug2 < Maxjug2){
                            jug2 = jug1 + jug2;
                            jug1 = 0;
                            
                            StepObject.Jug1 = jug1;
                           StepObject.Jug2 = 0;
                           StepObject.Action = 'Transfer water from jug 1 to 2';
                           StepObject.Desired = Desired;
                           console.log(jug1,jug2,StepObject.Action);
                           fsteps.push(StepObject);
                           

                        }
                        else if( jug1 + jug2 > Maxjug2 && jug2 < Maxjug2){
                            jug1 = jug1 + jug2 - Maxjug2;
                            StepObject.Jug2 = jug2;
                           StepObject.Jug1 = jug2 + (Maxjug1 - jug1);
                           StepObject.Action = 'Transfer water from jug 1 to 2';
                           StepObject.Desired = Desired;
                           console.log(jug1,jug2,StepObject.Action)
                           fsteps.push(StepObject);
                           

                        }

                        else if((Maxjug2 - Desired) == Math.abs(Maxjug1 - Desired) && jug2 == Maxjug2 && jug1 == 0){
                            jug2 = jug2 - Maxjug1;
                            jug1 = Maxjug1;
                            StepObject.Jug2 = jug2;
                            StepObject.Jug1 =jug1;
                            StepObject.Action = 'transfer jug 2 water to jug 1';
                            StepObject.Desired = Desired;
                            fsteps.push(StepObject);
                            console.log(jug1,jug2,StepObject.Action)
                        }
                        else if((Maxjug2 - Desired) == Math.abs(Maxjug1 - Desired) && jug2 == Maxjug2 && jug1 != 0){
                            jug2 = jug2 - Math.abs(Maxjug1 - jug1);
                            jug1 = Maxjug1;
                            StepObject.Jug2 = jug2;
                            StepObject.Jug1 =jug1;
                            StepObject.Action = 'transfer jug 2 water to jug 1';
                            StepObject.Desired = Desired;
                            fsteps.push(StepObject);
                            console.log(jug1,jug2,StepObject.Action)
                        }

                        

                        else if((Maxjug2 - Desired) == Math.abs(Maxjug1 - Desired) && jug1 == Maxjug1){
                            jug1 = 0;
                            jug2 = jug2;
                            StepObject.Jug2 = jug2;
                            StepObject.Jug1 =jug1;
                            StepObject.Action = 'Empty Jug 1';
                            StepObject.Desired = Desired;
                            fsteps.push(StepObject);
                            console.log(jug1,jug2,StepObject.Action)

                        }

                        else if(jug1 == 0 && jug2 != 0){
                            jug1 = Maxjug1;
                            jug2 = jug2 - Maxjug2;
                            
                            StepObject.Jug2 = jug2;
                            StepObject.Jug1 =jug1;
                            StepObject.Action = 'transfer jug 2 water to jug 1';
                            StepObject.Desired = Desired;
                            fsteps.push(StepObject);
                            console.log(jug1,jug2,StepObject.Action)

                        }

                        else if((jug2 - jug1 == Desired)){
                            jug2 = jug2 - jug1;
                            jug1 = Maxjug1;
                            StepObject.Jug2 = jug2;
                            StepObject.Jug1 =jug1;
                            StepObject.Action = 'transfer jug 2 water to jug 1';
                            StepObject.Desired = Desired;
                            fsteps.push(StepObject);
                            console.log(jug1,jug2,StepObject.Action)
                            
                        }
                        else if ((Maxjug2 - Desired) == Math.abs(Maxjug1 - Desired) && jug2 == 0){
                            jug2 = Maxjug2;
                            jug1 = jug1;
                            StepObject.Jug1 = jug1;
                            StepObject.Jug2 = jug2
                            StepObject.Action = 'Fill Jug 2';
                            StepObject.Desired = Desired;
                            fsteps.push(StepObject);
                            console.log(jug1,jug2,StepObject.Action)
                        }
                        else if(Maxjug2 == Desired){
                            jug2 = Maxjug2;
                            jug1 = jug1;
                            StepObject.Jug1 = jug1;
                            StepObject.Jug2 = jug2
                            StepObject.Action = 'Fill Jug 2';
                            StepObject.Desired = Desired;
                            fsteps.push(StepObject);
                            console.log(jug1,jug2,StepObject.Action)

                        }

                        else if(Maxjug1 == Desired){
                            jug1 = Maxjug1;
                            jug2 = jug2;
                            StepObject.Jug1 = jug1;
                            StepObject.Jug2 = jug2
                            StepObject.Action = 'Fill Jug 1';
                            StepObject.Desired = Desired;
                            fsteps.push(StepObject);
                            console.log(jug1,jug2,StepObject.Action)

                        }

                        else if( Maxjug2 - Maxjug1 == Desired){
                            jug2 = Maxjug2;
                            jug1 = jug1;
                            StepObject.Jug2 = jug2;
                            StepObject.Jug1 = jug1;
                            StepObject.Action = 'Fill Jug 2';
                            StepObject.Desired = Desired;
                            fsteps.push(StepObject);
                            console.log(jug1,jug2,StepObject.Action)

                        }
                     



                    }
                    setSteps(fsteps);
                }
                

                


            }

        }

    }
    
  return (
    <>  
       <Error 
       Errorbool = {Errorbool}
       ErrorMessage = {ErrorMessage}
       
       />
        <div className="measurements">
            <div className="col col-expand">
                <label htmlFor='amount_inp'>Enter the desired amount of water</label>
                <input id='amount_inp' onChange={(e) => setDesired(Number(e.target.value))} className="number_input" type="number" min="0"/>
            </div>
            <div className="col">
                <label  htmlFor='jug1_inp'>Enter the maximum amount of water for the jug 1</label>
                <input id='jug1_inp' onChange={(e) => setMaxjug1(Number(e.target.value))} className="number_input" type="number" min="0"/>
            </div>
            <div className="col">
                <label htmlFor='jug2_inp'>Enter the maximum amount of water for the jug 2</label>
                <input id='jug2_inp' onChange={(e) => setMaxjug2(Number(e.target.value))} className="number_input" type="number" min="0"/>
            </div>
        </div>
        <button className="Results_buton" onClick={HandleValues}>See Results</button>
  </>
  )
}

export default Ui