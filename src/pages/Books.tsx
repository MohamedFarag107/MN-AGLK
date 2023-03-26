import { getBookImageUrl, getBookPdfUrl } from '@/components/ProfileImage';
import useBooks from '@/hooks/useBooks'
import { useAppSelector } from '@/hooks/useRedux'
import React from 'react'
interface Book {
  title?: string | undefined;
  author?: string | undefined;
  description?: string | undefined;
  bookImage?: string | undefined;
  bookFile?: string | undefined;
  _id?: string | undefined;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
  __v?: number | undefined;
}
const Book = ({ item }: { item: Book }) => {
  const bookURL = 'https://firebasestorage.googleapis.com/v0/b/mn-aglk.appspot.com/o/a1f88733921c820db477d054fe96afbb.jpg?alt=media&token=48ca814c-176a-4e34-acdc-2ddfd95b5cd7'
  return (
    <div className='flex flex-col justify-center items-start gap-5 p-5 bg-white rounded-3xl shadow-xl'>
      <div className='flex justify-center items-center w-full'>
        <img className='h-80 object-contain' src={getBookImageUrl(item.bookImage || "")} alt="book" />
      </div>
      <div className='flex flex-col gap-3'>
        <h1>{item.title}</h1>
        <h1>{item.author}</h1>
        <h1>{item.description}</h1>
      </div>
      <a className='text-center bg-primary text-white w-full p-3 rounded-xl' target={"_blank"} href={getBookPdfUrl(item.bookFile || "")}>تحميل</a>
    </div>
  )
}

function Books() {
  const { loading } = useBooks()
  const { books } = useAppSelector(state => state.books)
  return (
    <div>
      <div className="container py-20">
        <h1 className='text-center text-3xl font-bold pb-20'>المكتبة</h1>

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5  p-5'>
          {
            books.map((item, index) => <Book key={index} item={item} />)
          }

        </div>

      </div>
    </div>
  )
}

export default Books