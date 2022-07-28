const Data = ({data}) => {
  return (
   <>
      <h1>{data.title}</h1>
       <div>
       <h3>{data.date}</h3>
       </div>
      <p>{data.explanation}</p>
      {data.media_type==="image"?<img src={data.hdurl} alt=""/>:""}
      {data.media_type==="video"?<iframe src={data.url} title={data.title}/>:""}
</>
   
  )
}

export default Data
