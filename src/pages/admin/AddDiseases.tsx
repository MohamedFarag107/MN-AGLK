import useDiseases from '@/hooks/useDiseases';
import { useAppSelector } from '@/hooks/useRedux';
import axios from 'axios';
import { useState } from 'react'
import toast from 'react-hot-toast'
import { AiOutlineDelete } from 'react-icons/ai'

const mentalIllnesses = [{
  name: "Anxiety Disorders", symptoms: ["Excessive worry or fear", "Avoiding social situations", "Panic attacks", "Obsessive-compulsive behavior", "Physical symptoms such as sweating or trembling",],
},
{
  name: "Mood Disorders",
  symptoms: [
    "Depressed mood",
    "Loss of interest or pleasure",
    "Irritability",
    "Feelings of worthlessness or guilt",
    "Difficulty concentrating",
  ],
},
{
  name: "Personality Disorders",
  symptoms: [
    "Unstable sense of self",
    "Impulsive behavior",
    "Difficulty with relationships",
    "Fear of abandonment",
    "Emotional instability",
  ],
},
{
  name: "Eating Disorders",
  symptoms: [
    "Restricting food intake",
    "Binge eating",
    "Purging behaviors",
    "Obsessive thoughts about body weight or shape",
    "Denial of hunger",
  ],
},
{
  name: "Substance Abuse Disorders",
  symptoms: [
    "Compulsive drug or alcohol use",
    "Withdrawal symptoms",
    "Loss of control over substance use",
    "Continued use despite negative consequences",
    "Tolerance to the substance",
  ],
},
];

function AddDiseases() {
  const [name, setName] = useState('')
  const [symptoms, setSymptoms] = useState<string[]>([''])
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const add = () => {
    // name validation
    if (name.length < 3) {
      toast.error('الاسم غير صحيح')
      return
    }

    const data = {
      name,
      symptoms
    }
    axios.post('/diseases', data).then(res => {
      window.location.reload()
    }
    ).catch(err => {
      console.log(err)
      toast.error('حدث خطأ ما')
    }
    )

  }

  const { loading } = useDiseases()
  const { diseases } = useAppSelector(state => state.diseases)

  const deleteDiseases = (id: string) => {
    axios.delete(`/diseases/${id}`).then(res => {
      window.location.reload()
    }).catch(err => {
      console.log(err)
      toast.error('حدث خطأ ما')
    }
    )
  }

  return (
    <div>
      <div className="container">
        <div className='py-9'>
          <h1 className='text-xl font-bold'>إضافة مرض</h1>
          <div className='bg-secondary space-y-5 rounded-md p-5 my-5'>
            <div className='flex flex-col items-center gap-3 md:flex-row'>
              <p className='w-[100px]'>اسم المرض:</p>
              <input value={name} onChange={handleNameChange} placeholder='اسم المرض' className='flex-1 p-2' type="text" />
            </div>
            <div className='flex flex-col items-start gap-3 md:flex-row'>
              <p className='w-[100px]'>الأعراض:</p>
              <ul className='flex flex-col gap-3 w-full'>
                {
                  symptoms.map((item, index) => <li key={index} className='flex items-center gap-3'>
                    <textarea rows={3} value={item} onChange={(e) => {
                      const newSymptoms = [...symptoms]
                      newSymptoms[index] = e.target.value
                      setSymptoms(newSymptoms)
                    }} placeholder='العرض' className='flex-1 p-2' />
                    <button onClick={() => {
                      const newSymptoms = [...symptoms]
                      newSymptoms.splice(index, 1)
                      setSymptoms(newSymptoms)
                    }} className='bg-red-500 p-2 rounded-md text-white'>حذف</button>
                  </li>)
                }
              </ul>


            </div>
            <button onClick={(e) => {
              e.preventDefault()
              setSymptoms([...symptoms, ''])
            }} className='bg-primary text-white p-3 rounded-xl'

            >اضافه عرض اخر</button>
            <br />

            <button onClick={add} className='bg-primary text-white p-3 rounded-xl'>إضافة</button>
          </div>
          <h1 className='text-xl font-bold pb-5'>الأمراض</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 bg-secondary'>
            {
              diseases?.map((item, index) => <div key={index} className='bg-white rounded-md p-5'>
                <div onClick={() => deleteDiseases(item._id)} className='rounded-md p-2 cursor-pointer bg-red-500 w-fit text-white transition-all'>
                  <AiOutlineDelete />
                </div>
                <h1 dir='ltr' className='text-xl font-bold'>{item.name}</h1>
                <ul dir='ltr' className='flex flex-col gap-3 list-disc pl-5'>
                  {
                    item.symptoms.map((item, index) => <li key={index}>{item}</li>)
                  }
                </ul>
              </div>)
            }
          </div>
          <div className='h-[100px]' />
        </div>
      </div>
    </div>
  )
}

export default AddDiseases