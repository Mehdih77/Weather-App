import React from "react";
import "./ToggleBtn.css";

const ToggleBtn = ({ toggle, checkedBox, disable }) => {
  return (
    <div className="toggle-button-cover ">
      <div className="button-cover ">
        <div
          className={disable ? "button b2 disable" : "button b2"}
          id="button-10">
          <input
            disabled={disable}
            onChange={toggle}
            checked={checkedBox}
            type="checkbox"
            className="checkbox"
          />
          <div className="knobs">
            <span className={disable ? "disable" : null}>YES</span>
          </div>
          <div className="layer"></div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ToggleBtn);
