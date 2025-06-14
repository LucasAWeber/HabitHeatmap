import HeatMap from "@uiw/react-heat-map";
import { Tooltip } from 'react-tooltip';
import { HabitData } from "../pages/Home";

// Used to convert the date to the month and day 
function formatDateWithSuffix(date: Date) : string {
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const day = date.getDate();
    const month = monthNames[date.getMonth()];

    const suffix =
    day % 10 === 1 && day !== 11 ? 'st' :
    day % 10 === 2 && day !== 12 ? 'nd' :
    day % 10 === 3 && day !== 13 ? 'rd' : 'th';

    return `${month} ${day}${suffix}`;
}

const Habit = (props: {habitData : HabitData, startDate : Date, endDate : Date }) => {
    return (
        <div style={{userSelect: "none", display: "block", justifyContent: "center"}}>
            <HeatMap
                value={props.habitData.data}
                width={1000}
                height={150}
                space={2}
                legendCellSize={0}
                weekLabels={["","Mon","","Wed","","Fri",""]}
                rectSize={15}
                rectProps={{rx: 3}}
                startDate={props.startDate}
                endDate={props.endDate}
                style={{ color: 'white'}}
                rectRender={(data, value) => {
                    const count : number = value.count || 0;
                    const habitType : string = props.habitData.type + (value.count == 1 ? "" : "s")
                    const date : Date = new Date(value.date)
                    const dateString : string = formatDateWithSuffix(date);
                    return (
                        <rect
                            {... data}
                            data-tooltip-id="heatmap-tooltip"
                            data-tooltip-content={`${count} ${habitType} on ${dateString}`}
                            data-tooltip-place="top"
                        />
                    );
                }}
            />
            <Tooltip id="heatmap-tooltip" place="top"/>
        </div>
    );
};

export default Habit;