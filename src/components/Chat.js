import React, { useState, useEffect } from "react";

import queryString from "query-string";
import io from "socket.io-client";

let socket;
const Chat = ({ location }) => {
  const [users, setUsers] = useState([]);
  const [booth, setBooth] = useState([]);

  useEffect(() => {
    const { boothName, username } = queryString.parse(location.search);
    socket = io("https://virtualfair01.herokuapp.com");
    setBooth(boothName);

    socket.emit("joinBooth", { boothName, username }, (error) => {
      console.log(error);
    });
  }, [location]);

  useEffect(() => {
    socket.on("users", (user) => {
      setUsers(user);
    });
  }, []);

  return (
    <div>
      <span style={{ width: "20%" }}>
        <h2>Online users on {booth}</h2>

        {users.length &&
          users.map((e) => {
            return (
              <div>
                <p>{e.username}</p>
              </div>
            );
          })}
      </span>
    </div>
  );
};

export default Chat;
