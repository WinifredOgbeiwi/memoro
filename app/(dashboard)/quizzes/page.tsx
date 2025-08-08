import HistoryTable from '@/app/components/HistoryTable'
import FolderCard from '@/app/components/ui/FolderCard'
import { createQuizzes } from '@/app/lib/data'
import React from 'react'

const HistoryPage = () => {
  return (

   <section className='w-full h-full  p-4'>
  <div className='flex flex-wrap gap-10  items-center w-full mx-auto h-full'>
    {
      createQuizzes.map((quiz, index) => (
        <FolderCard
          key={index}
          title={quiz.title}
          description={quiz.description}
        />
      ))
    }
  </div>

<div className='mt-10'>
  <HistoryTable/>
</div>
   </section>

  )
}

export default HistoryPage