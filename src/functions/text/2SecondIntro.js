import React from "react";
const Text2 = (props) =>{
    let {rules, action} = props
    return(
        <div className="col-12">
            <div className=" col-8 offset-2 bg-primary rounded">
                <p className="text-light">Dear Kathrine. <br/>I see that you struggle with your writing, and to help you I bestow upon you this pen. Please use it with care. This pen <span className="Hand font-weight-bolder text-danger text-center" onClick={()=>action({rules:{...rules,power:!rules.power}})}>{rules.power ? "has" : "doesn't have"}</span> the power to alter reality itself. <br/> If you see something written down, this pen can change whatever is written. Simply scratch it out, append something new or change the entire word. Then all you have to do is wait and see reality change without anyone but you noticing. <br/>With love: Puppy</p>
            </div>
            <p className="text-light">Kathrine couldn't believe her luck. This was amazing. She wanted to try it out immediately. </p>
        </div>
    )
}

export default Text2;