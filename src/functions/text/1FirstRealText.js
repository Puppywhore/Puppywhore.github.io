import React from "react";
const Text1 = (props) =>{
    //let {rules, time, bool, action} = props
    return(
        <div className="col-12">
            <p className="text-light">Finding yourself in a harsh world can be difficult. Finding yourself, when the world tries its best to decide who you are is almost impossible. <br/> Kathrine sighed deleting the opening to her newest essay assignment. The raven-haired girl had a hard time figuring out what was happening in her life. Everything seemed to have... stopped. It was like this ever since she had gotten a job next to her studies.  She closed her computer and looked at her reflection in the mirror. She could see that short black hair that was just long enough to be annoying for her eyes. The petite and slender body, that meant that if she wore baggy clothing she would usually be mistaken for a boy, which she blamed her small breasts for. </p>
            <br/>
            <img className="img-fluid rounded" src={require("../../resources/kathrine.jpg")} alt="Kathrine"/>
            <br/>
            <p className="text-light">Kathrine didn't hate her body... she simply disliked it. She looked around the room and found something out of the ordinary. On her bed, she found a small package. Rushing to pick it up the young woman saw calligraphy styled pen.</p>
            <br/>
            <img className="img-fluid rounded" src={require("../../resources/pen.jpg")} alt="Pen"/>
            <br/>
            <p className="text-light"> Kathrine quickly started to read the note on top of the pen, wanting to find out what this strange item was, and more importantly how it had appeared in her bedroom.</p>
        </div>
    )
}

export default Text1;