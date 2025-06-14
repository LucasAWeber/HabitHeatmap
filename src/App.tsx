import HeatMap from '@uiw/react-heat-map';
import React from 'react';

const App = () => {
    let endDate : Date = new Date();
    let startDate : Date = new Date();
    let currentYear : number = endDate.getFullYear();
    let previousYear : number = currentYear - 1;
    startDate.setFullYear(previousYear);
  return (
    <div style={{width: "100vh", height: "100vh", display: "flex", flexDirection: "column"}}>
        <HeatMap
            width={1000}
            height={250}
            space={2}
            legendCellSize={0}
            weekLabels={["","Mon","","Wed","","Fri",""]}
            rectSize={15}
            rectProps={{rx: 3}}
            startDate={startDate}
            endDate={endDate}/>
    </div>
  );
};

export default App;