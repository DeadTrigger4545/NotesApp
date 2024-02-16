import "./HomeLeft.css";

const HomeLeft = ({ groups, toggleModal, setSelectedGroup }) => {
  const handleGroupClick = (group) => {
    setSelectedGroup(group); 
  };

  return (
    <div className="HomeLeft_main">
      {groups.map((group, index) => (
        <div
          className="groupname_div"
          key={index}
          onClick={() => handleGroupClick(group)}
        >
          <div className="groupname_circle" style={{ background: group.color }}>
            <h1 id="initials">{group.initials}</h1>
          </div>
          <h1 id="grp_name">{group.name}</h1>
        </div>
      ))}
      <button className="addbutton" onClick={toggleModal}>
        +
      </button>
    </div>
  );
};

export default HomeLeft;
