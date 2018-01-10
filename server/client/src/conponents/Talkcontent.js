import React, { Component } from "react";
import Talkmessage from "./Talkmessage";

export default class Talkcontent extends Component {
  render() {
    const talkerContents = [
      {
        name: "supersun",
        msg:
          "帘下清歌帘外宴。虽爱新声，不见如花面。牙板数敲珠一串，梁尘暗落琉璃盏。桐树花深孤凤怨。渐遏遥天，不放行云散。坐上少年听不惯，玉山未倒肠先断。"
      },
      {
        name: "supersun",
        msg:
          "帘下清歌帘外宴。虽爱新声，不见如花面。牙板数敲珠一串，梁尘暗落琉璃盏。桐树花深孤凤怨。渐遏遥天，不放行云散。坐上少年听不惯，玉山未倒肠先断。"
      },
      { name: "supersun", msg: "养天地正气，法古今完人" }
    ];
    const chatContents = talkerContents.map((talk, idx) => (
      <Talkmessage key={idx} name={talk.name} msg={talk.msg} />
    ));
    return <div className="row">{chatContents}</div>;
  }
}
