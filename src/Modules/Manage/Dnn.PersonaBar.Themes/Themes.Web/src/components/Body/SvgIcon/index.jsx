import React, {Component, PropTypes } from "react";
import { connect } from "react-redux";
import {
    theme as ThemeActions
} from "actions";
import Localization from "localization";
import GridCell from "dnn-grid-cell";
import Button from "dnn-button";
import "./style.less";

const SvgIcons = {
    EmptyThumbnail: <svg version="1.1" x="0px" y="0px" viewBox="0 0 2048 2048">
                        <g>
                            <rect x="255.2" y="254.3" width="480.1" height="523.2"/>
                            <rect x="875.8" y="589.7" width="917" height="187.8"/>
                            <rect x="255.2" y="905.9" width="1537.6" height="883.1"/>
                            <rect x="875.8" y="254.3" width="917" height="187.8"/>
                        </g>
                    </svg>,
    Checkmark: <svg version="1.1" x="0px" y="0px" viewBox="0 0 2048 2048">
                    <g>
                        <polygon points="1524.4,714.3 1417,606.9 868,1155.8 657.8,945.6 550.4,1053 868,1370.7 975.5,1263.3 975.5,1263.3"/>
                    </g>
                </svg>,
    View: <svg version="1.1" x="0px" y="0px" viewBox="0 0 2048 2048">
                    <g>
                        <path d="M1024,423c-357.1,0-677.7,232.5-896.8,601c219.1,368.5,539.7,601,896.8,601s677.7-232.5,896.8-601C1701.7,655.5,1381.1,423,1024,423z M1024,1432.3c-225.2,0-407.7-183.1-407.7-409c0-225.9,182.5-409,407.7-409c225.1,0,407.7,183.1,407.7,409C1431.7,1249.2,1249.2,1432.3,1024,1432.3z"/>
                        <path d="M1024,793.7c-126.4,0-228.9,102.8-228.9,229.6c0,126.8,102.5,229.6,228.9,229.6c126.4,0,228.9-102.8,228.9-229.6C1252.9,896.5,1150.4,793.7,1024,793.7z"/>
                    </g>
                </svg>,
    Apply: <svg version="1.1" x="0px" y="0px" viewBox="0 0 2048 2048">
                    <g>
                        <polygon points="1788.3,378.5 1787.2,378.5 1661.9,378.5 1537.1,378.5 1537.1,257.2 259.7,257.2 259.7,641.2 1537.1,641.2 1537.1,503.8 1661.9,503.8 1661.9,735.5 837.2,923 838.3,927.7 835.7,927.7 835.7,1278.3 740.2,1278.3 740.2,1789 1050.4,1789 1050.4,1278.3 961,1278.3 961,1023.3 1787.2,835.4 1785.3,827.1 1787.2,827.1 1787.2,503.8 1788.3,503.8 "/>
                    </g>
                </svg>,
    Trash: <svg version="1.1" x="0px" y="0px" viewBox="0 0 2048 2048">
                    <g>
                        <polygon points="503.6,1786 1535.6,1786 1672.6,626.4 390.5,626.4 	"/>
                        <polygon points="1287.6,386.2 1287.6,262 767.5,262 767.5,386.2 317.4,386.2 317.4,514 1730.6,514 1730.6,386.2 	"/>
                    </g>
                </svg>,
    Site: <svg version="1.1" x="0px" y="0px" viewBox="0 0 2048 2048">
                <g>
                    <path d="M780.2,1149.6c56.2,51.9,144.2,97.5,257.8,97.5c117.3,0,163.7-49.8,163.7-96.4c0-63.6-86.8-82.6-185.7-104.9c-133.2-28.6-289.6-62.5-289.6-211.9c0-116.5,118.5-206.6,296.9-206.6c127.1,0,229.7,35,305.5,98.5L1247,818c-63.5-55.1-150.3-80.5-235.8-80.5c-84.3,0-138.1,35-138.1,87.9c0,55.1,83.1,73.1,179.6,94.3c134.4,29.7,294.5,65.7,294.5,219.3c0,117.6-95.3,218.2-315.3,218.2c-150.3,0-259.1-45.6-331.1-112.3L780.2,1149.6z"/>
                </g>
            </svg>,
    Edit:   <svg version="1.1" x="0px" y="0px" viewBox="0 0 2048 2048">
                <g>
                    <path d="M744.9,637.8h558.2v109.1H887.8V930h406.7v109.1H887.8V1235h415.3V1344H744.9V637.8z"/>
                </g>
            </svg>
};

class SvgIcon extends Component {
    constructor() {
        super();
        this.state = {};
    }

    
    render() {
        const {props, state} = this;

        return (
            SvgIcons[props.name]
        );
    }
}

SvgIcon.propTypes = {
    name: PropTypes.string
};

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps)(SvgIcon);