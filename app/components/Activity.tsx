import { ContentActivities } from "../resume.types";

export default function Activity({ heading, items }:ContentActivities) {
    return (
        <div className="flex flex-row">
            <div className="basis-1/3 text-bold">{heading}</div>
            <div>
                <ul className="activity-list p-1">
                    {items?.map((item, i) => {
                        return (<li className="text-xs text-gray-600" key={"activityli" + i}>{item}</li>)
                    })}
                </ul>
            </div>
        </div>
    )
}