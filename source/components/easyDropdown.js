import React, {useState} from "react";
import "../css/eD.css";

const easyDropdown = (props) => {

    var [dDstatus, toggleDD] = useState(true);

    return(
        <div className="eDflex">
            <div className="eDgrid">
                <div className="eDtitle" onClick={() => toggleDD(!dDstatus)}>
                    {}
                    {props.info.title} <i class="fa-solid fa-plus fa-sm"></i>
                </div>
                <div className="eDcontent">
                    {dDstatus ? <div></div> : props.info.content}

                </div>
            </div>
        </div>
    )
}

export default easyDropdown;