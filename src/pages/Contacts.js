import React from "react";

import telegram from "../images/icons/telegram.svg";
import instagram from "../images/icons/instagram.svg";
import discord from "../images/icons/discord.svg";
import phone from "../images/icons/phone.svg";
import gmail from "../images/icons/gmail.svg";

function Contacts() {
  return (
    <>
      <h2>Contacts:</h2>
      <ul>
        <li>
          <a href="mailto:krutsvanya@gmail.com"> krutsvanya@gmail.com </a>
          <img src={gmail} alt="gmail" style={{ width: "30px", height: "30px", marginLeft: "5px" }} />
        </li>
        <li>
          <a href="tel:+380934478779"> +380934478779 </a>
          <img src={phone} alt="phone" style={{ width: "30px", height: "30px", marginLeft: "5px" }} />
        </li>
        <li>
          <a href="#">Instagram</a>
          <img src={instagram} alt="instagram" style={{ width: "30px", height: "30px", marginLeft: "5px" }} />
        </li>
        <li>
          <a href="https://t.me/krutsVania">Telegram</a>
          <img src={telegram} alt="telegram" style={{ width: "30px", height: "30px", marginLeft: "5px" }} />
        </li>
        <li>
          <a href="#">Discord</a>
          <img src={discord} alt="discord" style={{ width: "30px", height: "30px", marginLeft: "5px" }} />
        </li>
      </ul>
    </>
  );
}

export default Contacts;
