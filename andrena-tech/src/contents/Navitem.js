import React, { Component} from 'react';
import { Link } from "react-router-dom";
class Navitem extends Component {
    render() {
        const {item, tolink, activec} = this.props;
        return (
            <li id={item}>
                <Link to={tolink} onClick={activec.bind(this,item)}>{item}</Link>
            </li>
        )
    }
}
export default Navitem