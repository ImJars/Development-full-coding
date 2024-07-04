import React from 'react'

function ActivitieComponent({link,title,hours,text_1,text_2_purple,text_3,text_4}) {
  return (
    <>
        <div>
            <a href={link} className='border-divider-light block rounded-xl border p-4 text-xs backdrop-blur border-text-general border-opacity-25 bg-slate-900/60'>
                <div className='mb-1 flex justify-between text-sm text-slate-600 dark:text-slate-400'>
                    <span>{title}</span>
                    <span>{hours}</span>
                </div>
                <div className='flex flex-wrap items-baseline gap-x-1'>
                    <span>{text_1}<font className='text-text-purple font-semibold'>&nbsp;{text_2_purple}&nbsp;</font>{text_3}&nbsp;{text_4}</span>
                </div>
            </a>
        </div>
    </>
  )
}

export default ActivitieComponent