type Props = {
  title: string,
  date : string

}
function Title({title, date}: Props){
  return <div> 
    <h1>{title}</h1>
    <h4>{date}</h4>
  </div>
}

export default Title