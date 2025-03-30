import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from 'framer-motion';

const Card = ({data,reference}) => {
  return (
   <>
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}}  dragElastic={0.1} className="relative flex-shrink-0 bg-zinc-900/90 h-72 w-60 rounded-[40px] text-white py-10 px-8 overflow-hidden">

    <FaRegFileAlt />

    <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
<div className="footer absolute bottom-0   w-full left-0 ">

<div className='flex items-center justify-between mb-3 py-3 px-8'>
    <h5>{data.filesize}</h5>
   <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center '>

    {data.close?<IoCloseSharp/>:<GoDownload size=".8em" color='#fff' fontWeight="900"/>}

     

     </span>
</div>

{
    data.tag.isOpen?( <div className={`${data.tag.tagColor ==="blue"?"bg-blue-600":"bg-green-600"} tag w-full py-5  flex items-center  justify-center`}>
       
    <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
  </div>
    ) : null}


</div>


    
    </motion.div>
   </>
  )
}

export default Card
