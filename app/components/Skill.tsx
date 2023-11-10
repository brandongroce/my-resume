import { PropsWithChildren } from "react"
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

    // return (
    //     <div>
    //         <div className="px-4 sm:px-0">
    //             <h3 className="text-base font-semibold leading-7 text-gray-900">{type}</h3>
    //             <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">skill type details</p>
    //         </div>
    //         <div className="mt-6 border-t border-gray-100">
    //             <dl className="divide-y divide-gray-100">
    //             {groups.map(g => {
    //                 return (
    //                     <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
    //                         <dt className="text-sm font-medium leading-6 text-gray-900">{g.name}</dt>
    //                         <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
    //                         {g.group?.map((item, i) => {
    //                             return (<span className="btn join-item">{item}</span>)
    //                         })}
    //                         </dd>
    //                     </div>
    //                 )
    //             })}
    //             </dl>
    //         </div>
    //     </div>
    // )

    return (
        <div className="mb-4">
            <div className="flex flex-row bg-gray-100">
                <h2 className="text-bold text-gray-600 tracking-wider">{type}</h2>
            </div>
            <div>
                {groups.map(g => {
                    return (
                        <p className="grid grid-cols-5 gap-4 mt-1 items-center">
                            <span className={g.classes}>{g.name}: </span>
                            <span className="col-span-4 mt-1">
                                {g.group?.map((item, i) => {
                                    return (<span className={g.button}>{item}</span> )
                                })}
                            </span>
                        </p>
                    )
                })}
            </div>
        </div>
    )
}