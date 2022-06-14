import  "./App.css";
import "./mediaqueries.css";
import {format} from 'date-fns';

function App() {
    const date = format(new Date(), "dd.MM.yy HH:MM");
  return (
    <div class="app">
      <div className="topblock">
            <div className="icon"></div>
          <div className="time">{date}</div>
      </div>
      <div className="container">
          <div className="imgcontainer" id="snow">HEY</div>
          <div className="imgcontainer" id="village">LET'S</div>
          <div className="imgcontainer" id="mountains">GIVE</div>
          <div className="imgcontainer" id="fox"><center>ANY</center></div>
          <div className="imgcontainer" id="cloud">YOU CAN</div>
      </div>
      </div>
  );
};

export default App;
