import React from 'react';
import './Suggestion.css'
import {Link} from 'react-router-dom'
const Suggestion = ({title, videoId}) => {

    return ( 
        <Link to={`/app/player/${videoId}`} className='text-link'>
        <li className = "list-group-item">
        {title}
        </li>
        </Link>
     );
}
 
export default Suggestion;
