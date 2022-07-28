const Calendar = ({baseDate,onChange}) => {

  return (
    <div>

       <input id="date" max={new Date().toISOString().slice(0, 10)} type="date" value={baseDate}  onChange={onChange}/>
    </div>
  )
}

export default Calendar
