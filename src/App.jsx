import "./App.css";
import HomeRight from "./Components/HomeRight";
import HomeLeft from "./Components/HomeLeft";
import Modal from "./Components/Modal";
import MessageDropbox from "./Components/MessageDropbox";

import React, { useState, useEffect } from "react";

function App() {
  const [modal, setModal] = useState(false);
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  console.log(selectedGroup);

  useEffect(() => {
    const storedGroups = localStorage.getItem("groups");
    if (storedGroups) {
      setGroups(JSON.parse(storedGroups));
    }
  }, []);

  const toggleModal = () => {
    setModal(!modal);
  };

  const addGroup = (groupName, color) => {
    const existingGroup = groups.find((group) => group.name === groupName);
    if (existingGroup) {
      alert("A group with the same name already exists!");
      return;
    }

    const initials = groupName
      .split(" ")
      .map((word, index) => {
        if (index === 0 && word.length === 1) {
          return word.slice(0, 2).toUpperCase();
        } else if (index === 0) {
          return word.slice(0, 1).toUpperCase();
        } else if (index === 1 && word.length > 1) {
          return word.slice(0, 1).toUpperCase();
        } else if (index === 1 && word.length === 1) {
          return word.slice(0, 1).toUpperCase();
        }
        return "";
      })
      .join("");

    const newGroup = {
      name: groupName,
      initials: initials,
      color: color,
    };

    setGroups([...groups, newGroup]);

    localStorage.setItem("groups", JSON.stringify([...groups, newGroup]));

    toggleModal();
  };

  return (
    <div className="main">
      <div className="left" style={{ overflow: "hidden" }}>
        <h1
          style={{ position: "fixed", marginTop: "40px", marginLeft: "100px" }}
        >
          Pocket Notes
        </h1>
        <HomeLeft
          groups={groups}
          toggleModal={toggleModal}
          setSelectedGroup={setSelectedGroup}
        />
      </div>
      <div className="right">
        {selectedGroup ? (
          <MessageDropbox group={selectedGroup} />
        ) : (
          <HomeRight />
        )}
      </div>
      {modal && <Modal toggleModal={toggleModal} addGroup={addGroup} />}
    </div>
  );
}

export default App;
