import { ContentReferences } from "../resume.types";

export default function Reference({name, phone, email, relation, description}:ContentReferences) {
    return (
        <div className="flex flex-row border-b pb-2 mb-2">
            <div className="basis-1/3">
                <p className="text-bold">{name}</p>
                <p className="text-sm text-gray-600">{phone}</p>
                <p className="text-sm text-gray-600">{email}</p>
            </div>
            <div className="basis-2/3">
                <ul className="">
                    <li className="text-sm text-gray-600" key="reference-description">{description}</li>
                    <li className="text-sm text-gray-600" key="reference-relation">{relation}</li>
                </ul>
            </div>
        </div>
    )
}