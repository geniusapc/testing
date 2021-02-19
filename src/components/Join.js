import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";

const opts = {
  height: "390",
  width: "640",
  playerVars: { autoplay: 1 },
};
const vId = "W5Pr482QWws";
const key = "AIzaSyAEbj6kZ71j_C1-LHWDO_Gll08Y_8mrePM";
const channelId = "UCAIahQoZC1hpzzb0-Uy1whw";
const result = 10;
const le = `https://www.googleapis.com/youtube/v3/search?key${key}&channelId${channelId}&part=snippet,id&order=date&maxResults=${result}`;
console.log(le);
const Join = ({ history }) => {
  const [id, setId] = useState(vId);

  const onReady = (event) => event.target.pauseVideo();

  return <YouTube videoId={id} opts={opts} onReady={onReady} />;
};

export default Join;
