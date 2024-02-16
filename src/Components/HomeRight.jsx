import notes_home from "../assets/notes_home.png";
import "./HomeRight.css";

const HomeRight = () => {
  return (
    <div className="HomeRight_main">
      <div className="notes_home">
        <img id="notes-home_img" src={notes_home} alt="notes_home_img"></img>
      </div>
      <div>
        <h1 id="notes-home_h1">Pocket Notes</h1>
      </div>
      <div className="notes-home_para">
        <p>
          Send and receive messages without keeping your phone online.
          <br /> Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
        
        <p id="lock_para">🔒end-to-end encrypted</p>
      </div>
    </div>
  );
};

export default HomeRight;
