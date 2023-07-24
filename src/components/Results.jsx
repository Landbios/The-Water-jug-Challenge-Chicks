import { useState } from "react";


function Results({Steps}) {

    
    


  
    return(
        <>
        <div className="Results_container">
        <table>
            <thead>
            <tr>
            <th className="theader">Jug 1</th>
            <th className="theader">Jug 2</th>
            <th className="theader">Action</th>
            <th className="theader">Desired</th>
            </tr>
            
            </thead>
            <tbody>
            
                 
                    {Steps.map((Step) => {
                        return(
                            <tr>
                            
                            <td className="tcontent">{Step.Jug1}</td>
                            <td className="tcontent">{Step.Jug2}</td>
                            <td className="tcontent">{Step.Action}</td>
                            <td className="tcontent">{Step.Desired}</td>

                            </tr>
                        )
                    } 
                    
                    
                    
                    )}
                 

                

            </tbody>
          
            
        </table>
        
        </div>
        </>
    )
}

export default Results;