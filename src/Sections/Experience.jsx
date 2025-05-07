import {Timeline} from "../Components/Timeline.jsx";
import {experiences} from "../constants";

export default function Experience() {
    return (
        <div id='experience'>
            <Timeline data={experiences}/>
        </div>
    )
}