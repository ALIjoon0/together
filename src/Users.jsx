import './Users.css';
import Row from "./Row.jsx";
export default function Users(){
    return(
        <>
        <table>
            <thead>
                <th>نام</th>
                <th>نام خانوادگی</th>
                <th>شماره تماس</th>
                <th>سن</th>
                
            </thead>
       
        
        <tbody>
            <Row Name="parham" lastname="zahedi" phone="09909898330" age="32"/>
             <Row  Name="jorgAli" lastname="shasgoolian" phone="0990984565330" age="1032"/>
              <Row Name="asghar" lastname="taragheh" phone="09909898330" age="20"/>
               <Row  Name="Ali" lastname="Sibil" phone="099078598330" age="10" />
        
        </tbody>
         </table>
        
        
        
        
        </>
    )
}
