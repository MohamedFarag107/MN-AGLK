import useDiseases from '@/hooks/useDiseases';
import { useAppSelector } from '@/hooks/useRedux';
import React from 'react'
import { BiSearch } from 'react-icons/bi'
interface Props {
  name: string;
  symptoms: string[];
}
const Card = ({ name, symptoms }: Props) => {
  return <div className='bg-white rounded-md shadow-md p-4'>
    <h1 className='font-bold text-xl'>{name}</h1>
    <ul className='list-disc pl-5'>
      {
        symptoms.map((item: any, index: number) => <li key={index}>{item}</li>)
      }
    </ul>
  </div>
}
function Diseases() {
 

  const { loading } = useDiseases()
  const { diseases } = useAppSelector(state => state.diseases)

  return (
    <div>
      <div className="container py-20">
        <h1 className='text-center text-3xl font-bold pb-20'>الامراض</h1>
        <div className='bg-white flex items-center gap-5 rounded-lg overflow-hidden shadow-lg'>
          <div className='hover:bg-primary hover:text-white p-5 h-full cursor-pointer'>
            <BiSearch />
          </div>
          <input className='outline-none w-full' type="text" placeholder='ابحث هنا' />
        </div>
        <div dir='ltr' className="container py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {
            loading ? <div className='text-center'>جاري التحميل...</div> : diseases.map((item: any, index: number) => <Card key={index} name={item.name} symptoms={item.symptoms} />)
          }

        </div>
      </div>
    </div>
  )
}

export default Diseases