import React from "react";
import { useState, useEffect } from "react";
import Like from "../Like/Like";
import "./Picture.css";
import Comments from "../Comments/Comments";

//component for å vise bildene med funksjon for å slette de og se hvem som lastet de opp
export default (props) => {

    return(
        <section className="pictureBox">
            <p
                className="pictureUsername"
            >
                🙋: {props.username}

            {props.currentUser === props.username &&
                <button onClick={props.handleDelete}>
                    🗑️
                </button>
            }

            </p>
            <img
                src={"http://localhost:3000/" + props.src}
                alt={props.alt}
                className="picture"
            />

            <Like pictureId={props.pictureId} currentUser={props.currentUser}/>

            <p
                className="pictureText"
            >
                {props.text}
            </p>

            <Comments pictureId={props.pictureId} currentUser={props.currentUser}/>


        </section>
    )
}
