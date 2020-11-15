import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarHeader.css";
const SidebarHeader = () => {
  return (
    <div className="header">
      <div className="dp__header">
        <Avatar
          alt="Anirban Roy"
          src="https://scontent.fjsr5-1.fna.fbcdn.net/v/t1.0-9/122100442_1815006385329563_4189722574407020260_o.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=Swn_01SpKikAX_vPgzW&_nc_ht=scontent.fjsr5-1.fna&oh=769e8d8c6ea4b245ab66a915a19740e7&oe=5FD1C23F"
        />
      </div>
      <div className="info__header">
        <h4>Anirban Roy</h4>
        <p>#39023ihbd</p>
      </div>
    </div>
  );
};

export default SidebarHeader;
