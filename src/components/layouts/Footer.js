import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-dark" style={footerstyle}>
        App developed by Adebayo Ilerioluwa
        <p><Link to="">Github</Link></p>
       </footer>
    )
}
const footerstyle ={
    marginTop:'100px',
    padding:'1em',
    width:'100%',
    textAlign:'center',
    left: 0,
    bottom:0
}

