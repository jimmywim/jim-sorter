import { debounce } from '../util/debounce';
import './Ranker.css';

export default function Ranker(props) {

  // const item1Win = () => debounce(props.onItem1Click, 500);
  // const item2Win = () => debounce(props.onItem2Click, 500);

  const item1Win = () => props.onItem1Click();
  const item2Win = () => props.onItem2Click();

  return (
    <div className="rankerContainer">
      {
        props.contestItems ?
          <div style={{
            display: 'flex'
          }}>
            <div className="rankTile" onClick={item1Win}>
              <span >{props.contestItems[0].name}</span>
            </div>
            <div className="rankTile" onClick={item2Win}>
              <span >{props.contestItems[1].name}</span>
            </div>
          </div>
          :
          <div className="startButton" onClick={props.onStart}>Start!</div>
      }

    </div>
  )
}