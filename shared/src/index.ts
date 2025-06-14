export interface HeatMapValue {
    date : string,
    count : number
}

export interface HabitData {
    name : string,
    type : string,
    data : HeatMapValue[],
}