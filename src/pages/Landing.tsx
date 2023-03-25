import { useAppSelector } from '@/hooks/useRedux'
import React from 'react'
interface HeadingWithSub {
  title: string
  subTitle: string
}
const HeadingWithSub = ({ title, subTitle }: HeadingWithSub) => {
  return <div className='text-primary'>
    <h1 className='text-xl font-bold'>{title}</h1>
    <h3>{subTitle}</h3>
  </div>
}

const Rounded = ({ value }: { value: string }) => {
  return <div className='bg-white p-10 rounded-full w-full text-center text-xl font-bold shadow-lg'>
    {value}
  </div>
}
function Landing() {
  const { landing } = useAppSelector(state => state.images)
  return (
    <div className='py-20 '>
      <div className="container relative bg-white shadow-md p-4 md:p-10 md:pb-40 rounded-xl">
        <h1 className='text-center text-2xl'>ما الذي يميز <span className='text-3xl font-bold'>من أجلك</span> ؟</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 pt-10 gap-10'>
          <HeadingWithSub title='الخصوصية والأمان' subTitle='تحدث مع معالجك النفسي اونلاين وبكل خصوصية' />
          <HeadingWithSub title='توفير الوقت و الجهد' subTitle='احصل على جلستك عبر الإنترنت بدون قوائم انتظار' />
          <HeadingWithSub title='مجموعة اختيارات متنوعة' subTitle='لدينا عدد كبير من المعالجين في تخصصات مختلفة لمساعدتك في أي شئ تواجهه' />
          <HeadingWithSub title='السهولة والسرعة' subTitle='التواصل السريع بين المستخدم والمعالج بدون خطوات معقدة' />
        </div>
        <img className='md:absolute md:-bottom-58 md:left-1/2 md:-translate-x-1/2' src={landing} alt="landing" />
      </div>
      <div className='md:pt-96 container'>
        <h1 className='text-center text-3xl font-bold pb-20'>بعض التخصصات</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center gap-20'>
          <Rounded value='الإكتئاب' />
          <Rounded value='إضطراب ثنائي القطب' />
          <Rounded value='القلق' />
          <Rounded value='الفصام' />
          <Rounded value='الوسواس القهري' />
          <Rounded value='الأرق' />
        </div>
      </div>
      <h1 className='text-center text-3xl font-bold pt-20 pb-10'>كيف تبدأ</h1>
      <div className='container bg-white shadow-md grid grid-cols-1 md:grid-cols-2 gap-10 p-10 rounded-xl'>
        <HeadingWithSub title='الأشتراك' subTitle='تسجيل الدخول عن طريق انشاء حساب خاص بك' />
        <HeadingWithSub title='اختيار المعالج' subTitle='تصف قائمة المعالجين واختيار المعالج المناسب' />
        <HeadingWithSub title='الحجز' subTitle='اختيار الميعاد المناسب لك من قائمة المواعيد المتاحة للمعالج وقم بالدفع' />
        <HeadingWithSub title='ابدأ رحلتك' subTitle='يمكنك التواصل مع معالج عن طريق طرق مختلفة خلال الجلية الكاميرا, الميكروفون, والمراسلة' />
      </div>
      <div className='h-40' />
    </div>
  )
}

export default Landing