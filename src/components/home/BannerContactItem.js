import React from "react";

const BannerContactItem = (props) => {
  return (
    <div >
      <div >
        <img src={props.img} alt="support" />
      </div>
      <div>
        <h5>
          <a href={props.link}>{props.icerik}</a>
        </h5>
       
      </div>
    </div>
  );
};

export default BannerContactItem;
