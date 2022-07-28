const Calendar = ({baseDate,onChange}) => {
  return (
    <div>
       <input id="date" type="date" value={baseDate}  onChange={onChange}/>
    </div>
  )
}

export default Calendar
