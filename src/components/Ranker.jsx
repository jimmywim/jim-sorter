export default function Ranker(props) {
  return (
    <div>
      {
        props.contestItems ?
          <div  style={{
            display: 'flex'
          }}>
            <div>             
              <button onClick={props.onItem1Click}>{props.contestItems[0].name}</button>
            </div>
            <div>
              <button onClick={props.onItem2Click}>{props.contestItems[1].name}</button>
            </div>
          </div>
          :
          <div onClick={props.onStart}>Start!</div>
      }

    </div>
  )
}