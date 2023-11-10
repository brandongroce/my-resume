import { ContentEducation } from "../resume.types";

export default function Education({school, grade, program, details}:ContentEducation) {
    return (
        <div>
            <div className="flex flex-row">
                <div className="basis-1/2">
                    <p className="text-md text-bold">{school}</p>
                    <p className="text-sm text-gray-600">{program}</p>
                    <p className="text-sm text-gray-600">{grade}</p>

                </div>
                <div className="basis-1/2">
                    <ul className="list-group">
                    {details?.map((item, i) => {
                        return (<li key={"eduli"+i} className="list-group-item text-xs p-1 text-gray-600">{item}</li>)
                    })}
                    </ul>
                </div>
            </div>
        </div>
    )
}