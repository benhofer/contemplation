import React, {useState} from 'react';
import styles from '../assets/css/components/browselinks.module.css';
import { NavLink } from "react-router-dom";

function BrowseLinks(props) {

    return (
        <div className="browse-links" style={{flexWrap: 'wrap'}}>
                { props.heading &&
                    <h1 className={styles.browse_heading}>
                        Browse by
                    </h1>
                }  
            <ul className={styles.browse_links}>
              
                {props.links.map(link => 
                    <li key={'browse-by-'+link.id+'-link'} >
                        <NavLink className={styles.browse_link} to={"/app/browse?filter="+link.id}>{link.name}</NavLink>
                    </li>
                )}
            </ul>
        </div>
    )

}

export default BrowseLinks; 