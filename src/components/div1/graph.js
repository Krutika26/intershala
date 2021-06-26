
import LineChart from 'react-linechart';

 
const Graph =()=> {
  
        const data = [
            {									
                color: "mediumslateblue", 
                points: [{x: 1, y: 2}, {x: 3, y: 5}, {x: 7, y: 2},{x:4,y:4}] 
            }
        ];
        return (
            <div>
                <div >
                    <h4>Applications recieved</h4>
                    <LineChart 
                        width={600}
                        height={200}
                        data={data}
                    />
                </div>				
            </div>
        );
    }

    export default Graph;