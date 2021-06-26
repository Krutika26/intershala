import { PieChart } from "react-minimal-pie-chart";
import { FiArrowUpRight } from "react-icons/fi";
import {MenuItem } from "react-pro-sidebar";
import Graph from "./graph";

const DIV1=()=>{
    return(
        <div >
            <div >      
               <div >
                  <div className="app2">
                   <MenuItem icon={<FiArrowUpRight />} >total applications 7723</MenuItem>
                  </div>
                  <div className="app3">
                  <MenuItem icon={<FiArrowUpRight />}>shortlisted 9523</MenuItem>
                   </div>
                     <div className="app4">
                     <MenuItem icon={<FiArrowUpRight />}>total applications 1344</MenuItem>
                     </div>
                     <div className="app1">
                        <p></p>
                     </div>
                         <ul>
                               <li>applications</li><progress  id="file" value="32" max="100" ></progress>
                               <li>shortlisted</li><progress id="file" value="50" max="100"></progress>
                               <li>on hold</li><progress id="file" value="40" max="100"></progress>
                                <li>rejected</li><progress id="file" value="80" max="100"></progress>
                           </ul>
                           <p>Open positions by department</p>
                           <div className="app2">
                           <MenuItem icon={<FiArrowUpRight />}>total applications 1344</MenuItem>
         </div>
         <div className="app3">
         <MenuItem icon={<FiArrowUpRight />}>total applications 1344</MenuItem>
         </div>
         <div className="app4">
         <MenuItem icon={<FiArrowUpRight />}>total applications 1344</MenuItem>
         
         </div>
                           <div className="pie">
                     <PieChart
                          data={[
                                  { title: 'One', value: 30, color: '#7b68ee'},
                                  { title: 'Two', value: 60, color: '#9586f1' },
                                   { title: 'Three', value: 10, color: '#b0a4f5' },
                                 ]}
                      />
                      </div>
                      <div className="chart">
                        <Graph/>
                      </div>
                      <button className="app5">
         <MenuItem icon={<FiArrowUpRight />}>Start new Campaign now</MenuItem>
         </button>
         <button className="app6">
         <MenuItem icon={<FiArrowUpRight />}>Pause all running Campaign</MenuItem>
         
         </button>
                      
         </div>
    </div>
        </div>
    )
}

export default DIV1;


       
         