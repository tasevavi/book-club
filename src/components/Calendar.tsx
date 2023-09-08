import './Calendar.css'

function Calendar(props: {
    date: {
        toLocaleString: (
            arg0: string,
            arg1: { month?: string; day?: string }
        ) => any
        getFullYear: () => any
    }
}): JSX.Element {
    const month = props.date.toLocaleString('en-US', { month: 'long' })
    const day = props.date.toLocaleString('en-US', { day: '2-digit' })
    const year = props.date.getFullYear()

    return (
        <div className="date-container">
            <div className="date-month">{month}</div>
            <div className="date-day">{day}</div>
            <div className="date-year">{year}</div>
        </div>
    )
}

export default Calendar

//datepicker is just input type='date' with min & max props
