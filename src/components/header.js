import React from "react";


function Header({ title, showDate, showTime }) {
    return (
        <div class="ui container" >
            <div className="header">
                <h2 >{title} {showDate + "     "}
                </h2>
                <h3>
                    {showTime + "     "} ⏲️
                </h3>
            </div>
        </div>
    )
}
export default Header;
