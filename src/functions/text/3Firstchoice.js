import React from "react";
const Text3 = (props) =>{
    let {rules} = props
    if(!rules.power){
        return(
            <div className="col-12">
               <p className="text-light"> Changing if the pen itself had power or not, actually didn't seem like the best idea. However the temptation to try out the pen was simply far too much for the young woman, so with trembling hands, she waited. <br/> A shiver seemed to pass through the air. Folding reality itself. The pen glowed for a second and then the light faded, leaving behind nothing but dust in Kathrine's hands. She sighed. She had the opportunity to change the world to whatever she had desired, but instead, she destroyed her only chance for adventure. She wanted to scream into the void, but instead found herself simply going back to write her essay.</p> 
            </div>
        )
    }else{
        return(
            <div className="col-12">
                <p className="text-light"> Changing something as pivotal as the nature of the pen seemed... stupid. Kathrine decided that it really wasn't worth messing with. Instead, she soon found herself in bed, regretting not having finished up her essay, but not motivated enough to do anything about it.</p>
                <br/>
                <img className="img-fluid rounded" src={require("../../resources/bed.jpg")} alt="Kathrine in bed"/>
                <br/>
                <p className="text-light">It didn't take long for her to drift off to sleep and as she slowly let her mind drift into unconsciousness she dreamt about all the possibilities with her newfound reality-warping power. </p>
            </div>
        )
    }

}

export default Text3;