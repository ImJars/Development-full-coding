import React from 'react'

function ActivitieComponent() {
  return (
    <>
        <div>
            <a href="#" className='border-divider-light block rounded-xl border p-4 text-[13px] backdrop-blur border-text-general border-opacity-20 bg-slate-900/60'>
                <div className='mb-1 flex justify-between text-xs text-slate-600 dark:text-slate-400'>
                    <span>REACTION</span>
                    <span>2 hours ago</span>
                </div>
                <div className='flex flex-wrap items-baseline gap-x-1'>
                    <span>the</span>
                    <span className='text-text-purple font-semibold'>Tentang Next.js dan Tailwind CSS 🔥</span>
                    <span class="lowercase">BLOG POST</span>
                    <span>got new</span>
                </div>
            </a>
        </div>
    </>
  )
}

export default ActivitieComponent