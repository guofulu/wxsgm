import React from "react"
import Calendar from "../../components/home/Calendar"


export default class MyCalendar extends React.Component{
    render() {
        return(
            <div>
                <Calendar {...this.props}>
                </Calendar>
            </div>
        )
    }
}