import React, { useState } from "react";

const Join = ({ history }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const onchangeName = (e) => {
    setName(e.target.value.trim());
  };

  const handleEnterRoom = (room) => {
    console.log(name);
    if (!name) {
      return setError("Name is required");
    }

    history.push(`/chat?username=${name}&boothName=${room}`);
  };

  return (
    <div>
      <h2>Welcome, please input ur name and click any Booth to Join</h2>
      <p style={{ color: "red" }}>{error}</p>
      <label>Name</label>{" "}
      <input placeholder="Login as fake user" type="text" value={name} onChange={onchangeName} />
      <hr />
      <button onClick={() => handleEnterRoom("Booth1")}>Booth1</button>
      <hr />
      <button onClick={() => handleEnterRoom("Booth2")}>Booth2</button>
      <hr />
      <button onClick={() => handleEnterRoom("Booth3")}>Booth3</button>
    </div>
  );
};

export default Join;
