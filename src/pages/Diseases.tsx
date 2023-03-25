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
          {mentalIllnesses.map((item, index) => (
            <Card key={index} name={item.name} symptoms={item.symptoms} />
          ))}

        </div>
      </div>
    </div>
  )
}

export default Diseases