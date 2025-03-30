import React, { useRef } from 'react'
import Card from './Card'


const Foreground = () => {
    const ref =useRef(null)
    const data = [
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, odio.",
            filesize: ".9mb",
            close: false,
            tag: { isOpen:false, tagTitle: "Download Now", tagColor: "blue" }
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, odio.",
            filesize: ".9mb",
            close: true,
            tag: { isOpen:true, tagTitle: "Download Now", tagColor: "green" }
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, odio.",
            filesize: ".9mb",
            close: true,
            tag: { isOpen:true, tagTitle: "Download Now", tagColor: "blue" }
        },
        
    ];

    return (
        <>
            <div ref={ref} className="w-full h-full fixed z-[3] top-0 p-5 left-0 flex gap-10 flex-wrap">
               {data.map((item, index)=>(
                <Card data={item} reference={ref}/>
               ))}
            </div>
        </>
    );
}

export default Foreground;
