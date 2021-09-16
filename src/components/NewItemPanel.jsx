import React from 'react';

export function NewItemPanel(props) {
  const panelWidth = 300;

  const [panelPosition, setPanelPosition] = React.useState(panelWidth * -1);
  const [userSelection, setUserSelection] = React.useState('');

  const openPane = () => {
    setPanelPosition(0);
  }

  const closePane = () => {
    setPanelPosition(panelWidth * -1);
  }

  const acceptList = () => {
    closePane();
    props.itemsSelected(userSelection.split(/\r?\n/));
  }

  const userSelectionPasted = (a) => {
    setUserSelection(a.target.value);
  }

  return (
    <div>
      {!panelPosition <= 0 && <button onClick={openPane}>Set Items to Rank</button>}

      {
        panelPosition === 0 &&
        <div style={{
          width: '300px',
          height: '100%',
          position: 'absolute',
          left: panelPosition.toString() + 'px',
          top: '0',
          border: '1px solid black',
          padding: '20px 0px'
        }}>
          <div>Paste a new-line seperate list of items below</div>
          <textarea
            rows={30}
            style={{ width: '95%' }}
            onChange={userSelectionPasted}
            value={userSelection}></textarea>
          <div>
            <button onClick={acceptList}>OK</button>
            <button onClick={closePane}>Cancel</button>
          </div>
        </div>
      }
    </div>
  );
}