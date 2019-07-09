import React from "react";
import Text1 from "./text/1FirstRealText";
import Text2 from "./text/2SecondIntro";
import Text3 from "./text/3Firstchoice";
import Text4 from "./text/4";
import Text5 from "./text/5";
import Text6 from "./text/6";
import Text7 from "./text/7";
import Text8 from "./text/8";
import Text9 from "./text/9";
import Text10 from "./text/10";
import Text11 from "./text/11";
import Text12 from "./text/12";
import Text13 from "./text/13";
import Text14 from "./text/14";
import Text15 from "./text/15";
import Text16 from "./text/16";
import Text17 from "./text/17";
import Text18 from "./text/18";
import Text19 from "./text/19";
import Text20 from "./text/20";


export const GetText = (props) =>{
    let {rules, time, bool, action, title} = props
    switch(time){
        case 0: 
            return <div> 
                <p className="text-light">Welcome to this experiment. While trying to learn to code I decided to put some my new-found knowledge into a project. The following project will probably have many shortcomings compared to projects created with things like twine, but never the less it functions more as a learning experience than anything else.<br/>Please be adviced that the following page contains items of adult nature and by clicking Progress you express an indirect degree of understanding of this.</p>
            </div>
        case 1:
                let item = rules.start;
            return( 
                <div>
                    <p className="text-light"> Through out the game you will see words that are bold and can be clicked. <br/> <span className="Hand font-weight-bolder text-danger text-center" onClick={()=>action({rules:{...rules,start:"CHANGE!"}})}>{item}</span> <br/> Some words might change permanently. While others can be toggled back and forth. <br/><span className="Hand font-weight-bolder text-danger text-center" onClick={()=>action({ bool:!bool})}>{bool ? "On" : <span className="animated 1 fadeIn slow">Off</span>}</span><br/>You can change as many things on a page as you like, however every time you press progress, the time of the story will move forward.</p>
                </div>)
        case 2:
            return (
                <Text1 rules={rules} time={time} action={action} title={title}/>
            )
        case 3:
            return(
                <Text2 rules={rules} time={time} action={action} title={title}/>
            )
        case 4: 
            return(
                <Text3 rules={rules} time={time} action={action} title={title}/>
            )
        case 5:
            return(
                <Text4 rules={rules} time={time} action={action} title={title}/>
            )
        case 6:
            return(
                <Text5 rules={rules} time={time} action={action} title={title}/>
            )
        case 7:
            return(
                <Text6 rules={rules} time={time} action={action} title={title}/>
            )
        case 8:
            return(
                <Text7 rules={rules} time={time} action={action} title={title}/>
            )
        case 9:
            return(
                <Text8 rules={rules} time={time} action={action} title={title}/>
            )
        case 10:
            return(
                <Text9 rules={rules} time={time} action={action} title={title}/>
            )
        case 11:
            return(
                <Text10 rules={rules} time={time} action={action} title={title}/>
            )
        case 12:
            return(
                <Text11 rules={rules} time={time} action={action} title={title}/>
            )
        case 13:
            return(
                <Text12 rules={rules} time={time} action={action} title={title}/>
            )
        case 14:
            return(
                <Text13 rules={rules} time={time} action={action} title={title}/>
            )
        case 15:
            return(
                <Text14 rules={rules} time={time} action={action} title={title}/>
            )
        case 16:
            return(
                <Text15 rules={rules} time={time} action={action} title={title}/>
            )
        case 17:
            return(
                <Text16 rules={rules} time={time} action={action} title={title}/>
            )
        case 18:
            return(
                <Text17 rules={rules} time={time} action={action} title={title}/>
            )
        case 19:
            return(
                <Text18 rules={rules} time={time} action={action} title={title}/>
            )
        case 20:
            return(
                <Text19 rules={rules} time={time} action={action} title={title}/>
            )
        case 21:
            return(
                <Text20 rules={rules} time={time} action={action} title={title}/>
            )
        default:
            return <div> 
                <p className="text-light">That is all for now folks. Again this is a learning experience. If you have something you wanna share then feel free to leave a comment wherever you found this game.</p>
            </div>
    }   
}