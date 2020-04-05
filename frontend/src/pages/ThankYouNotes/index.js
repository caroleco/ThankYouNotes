import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import jarImg from '../../assets/jam.png'

export default function ThankYouNotes() {
    return (
        <div>
            <img src={jarImg} alt=""/>
            <Link className="button actionTnotes" to="/thanks/new">Agradecer</Link>
            <Link className="button listTnotes" to="/tnotes/list">Lista</Link>
        </div>
    );
}