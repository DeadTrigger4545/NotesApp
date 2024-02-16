
import "./Modal.css";
import React, { useState } from "react";

export default function Modal({ toggleModal, addGroup }) {
  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState("#B38BFA"); 

  const handleGroupNameChange = (e) => {
    setGroupName(e.target.value);
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  const handleGroupCreation = () => {
    addGroup(groupName, selectedColor);
  };

  return (
    <>
      <div className="modal">
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content">
          <h3>Create New group</h3>
          <div className="groupName_div">
            <h4>Group Name</h4>&nbsp;&nbsp;&nbsp;
            <input
              id="groupname"
              type="text"
              placeholder="Enter group name"
              size={40}
              value={groupName}
              onChange={handleGroupNameChange}
            ></input>
          </div>
          <div className="chooseColour_div">
            <h4>Choose Colour</h4>&nbsp;&nbsp;&nbsp;
            <div
              className="colourRound"
              style={{ background: "#B38BFA" }}
              onClick={() => handleColorSelection("#B38BFA")}
            ></div>
            <div
              className="colourRound"
              style={{ background: "#FF79F2" }}
              onClick={() => handleColorSelection("#FF79F2")}
            ></div>
            <div
              className="colourRound"
              style={{ background: "#43E6FC" }}
              onClick={() => handleColorSelection("#43E6FC")}
            ></div>
            <div
              className="colourRound"
              style={{ background: "#F19576" }}
              onClick={() => handleColorSelection("#F19576")}
            ></div>
            <div
              className="colourRound"
              style={{ background: "#0047FF" }}
              onClick={() => handleColorSelection("#0047FF")}
            ></div>
            <div
              className="colourRound"
              style={{ background: "#6691FF" }}
              onClick={() => handleColorSelection("#6691FF")}
            ></div>
          </div>
          <button className="createButton" onClick={handleGroupCreation}>
            Create
          </button>
        </div>
      </div>
    </>
  );
}
