import { ContentSkills } from "../resume.types"


export default function Skill({type, primary, secondary, focus}:ContentSkills) {
    const idel = " - "
    const addDelimiter = (group:string[], index:number, delimiter:string) => group.length > index + 1? delimiter: " "
    const groups = [{
        group: primary,
        name: "Primary",
        classes: "text-gray-700 mt-1 text-right pr-4",
        button: "btn btn-active btn-xs m-1 btn-outline"
    },
    {
        group: secondary,
        name: "Secondary",
        classes: "text-gray-500 mg-1 text-right pr-4",
        button: "btn btn-active btn-xs m-1 btn-ghost"
    }
    // {
    //     group: focus,
    //     name: "Focus",
    //     classes: "text-blue-600 mt-1 text-right pr-4"
    // }
    ]


    return (
        <div className="mb-4">
            <div className="flex flex-row bg-gray-100">
                <h2 className="text-bold text-gray-600 tracking-wider">{type}</h2>
            </div>
            <div>
                {groups.map((g, idx) => {
                    return (
                        <p key={g.name+idx} className="grid grid-cols-5 gap-4 mt-1 items-center">
                            <span className={g.classes}>{g.name}: </span>
                            <span className="col-span-4 mt-1">
                                {g.group?.map((item, i) => {
                                    let key = "groupitem" + idx + i;
                                    return (<span key={key} className={g.button}>{item}</span> )
                                })}
                            </span>
                        </p>
                    )
                })}
            </div>
        </div>
    )
}