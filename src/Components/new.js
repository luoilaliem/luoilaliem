import React, { Component, useEffect, useRef, useState } from "react";

function Newsss() {
    const [post, setPost] = useState("a");
    const newss = useRef(null);
    useEffect(() => {
        newss.current = post;
    },[post])


    return (
        <div>
            
            <form>
            <h2>{post}</h2>
            <h2>{newss}</h2>
                <input ref={newss}></input>
                <button onClick={(ev) =>
                    setPost(ev.target.value)}>change</button>
            </form>
        </div>
    );
}
export default Newsss;