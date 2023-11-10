import { ContentExperience } from "../resume.types";

export default function Experience({name, products, type, position, detail, date, duties}:ContentExperience) {
    return (
        <div className="mb-4 border-b border-gray-200">
            <div className="flex justify-between">
                <p>
                    <span className="text-gray-600 font-bold">{name}</span><br />
                    <span className="text-gray-400">{position}</span><br />
                    <span className="text-xs">{products}</span><br />
                </p>
                <p>
                    <span className="text-gray-600 mr-2">{date}</span>
                    <br />
                    <span className="text-gray-600 text-sm">{type}</span>
                    
                </p>
            </div>
            <ul className="mt-2 ml-4 list-disc list-inside">
            {duties?.map(duty => {
                return (<li className="text-sm pb-1 text-gray-500">{duty}</li>)
            })}
            </ul>
        </div>
    )
}