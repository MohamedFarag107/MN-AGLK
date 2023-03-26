import { getBookImageUrl, getBookPdfUrl } from '@/components/ProfileImage'
import useBooks from '@/hooks/useBooks';
import { useState } from 'react'
import { useAppSelector } from '@/hooks/useRedux';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { AiOutlineDelete } from 'react-icons/ai';
interface IBook {
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
const Book = ({ item }: { item: IBook }) => {
  const delteBook = (id: string) => {
    axios.delete(`/books/${id}`).then(res => {
      window.location.reload()
    }).catch(err => {
      console.log(err)
      toast.error('حدث خطأ ما')
    }
    )
  }
  return (
    <div className='flex flex-col justify-center items-start gap-5 p-5 bg-white rounded-3xl shadow-xl'>
      <div onClick={() => delteBook(item._id || "")} className='rounded-md p-2 cursor-pointer bg-red-500 w-fit text-white transition-all'>
        <AiOutlineDelete />
      </div>
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

function AddBook() {
  const { loading } = useBooks()
  const { books } = useAppSelector(state => state.books)

  // title
  const [title, setTitle] = useState('')
  // author
  const [author, setAuthor] = useState('')
  // description
  const [description, setDescription] = useState('')
  // bookImage
  const [bookImage, setBookImage] = useState<File | null>(null)
  // bookFile
  const [bookFile, setBookFile] = useState<File | null>(null)

  // loading
  const [isLoading, setIsLoading] = useState(false)


  const add = () => {
    if (!title || !author || !description || !bookImage || !bookFile) {
      toast.error('يجب ملئ جميع الحقول')
      return
    }
    setIsLoading(true)
    const formData = new FormData()
    formData.append('title', title)
    formData.append('author', author)
    formData.append('description', description)
    formData.append('bookImage', bookImage)
    formData.append('bookFile', bookFile)
    axios.post('/books', formData).then(res => {
      window.location.reload()
    }).catch(err => {
      console.log(err)
      toast.error('حدث خطأ ما')
    }).finally(() => {
      setIsLoading(false)
    })
  }


  return (
    <div>
      <div className="container">
        <div className='py-9'>
          <h1 className='text-xl font-bold'>إضافة كتاب</h1>
          <div className='bg-secondary space-y-5 rounded-md p-5 my-5'>
            <div className='flex flex-col items-center gap-3 md:flex-row'>
              <p className='w-[100px]'>اسم الكتاب:</p>
              <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='اسم الكتاب' className='flex-1 p-2' type="text" />
            </div>
            <div className='flex flex-col items-center gap-3 md:flex-row'>
              <p className='w-[100px]'>المؤلف:</p>
              <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder='المؤلف' className='flex-1 p-2' type="text" />
            </div>
            <div className='flex flex-col items-center gap-3 md:flex-row'>
              <p className='w-[100px]'>نبذة:</p>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder='نبذة' className='flex-1 p-2' />
            </div>
            <div className='flex flex-col items-center gap-3 md:flex-row'>
              <p className='w-[100px]'>رفع صورة الكتاب:</p>
              <input onChange={(e) => setBookImage(e.target.files?.item(0) || null)} placeholder='رفع صورة الكتاب' className='flex-1 p-2' type="file" />
            </div>
            <div className='flex flex-col items-center gap-3 md:flex-row'>
              <p className='w-[100px]'>رفع الكتاب:</p>
              <input onChange={(e) => setBookFile(e.target.files?.item(0) || null)} placeholder='رفع الكتاب' className='flex-1 p-2' type="file" />
            </div>
            <button onClick={add} className='bg-primary text-white p-3 rounded-xl'>{
              isLoading ? 'جاري الاضافة .... ' : 'إضافة'
            }</button>
          </div>
          <h1 className='text-xl font-bold pb-5'>الكتب</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 bg-secondary'>
            {
              books.map((item, index) => <Book key={index} item={item} />)
            }
          </div>
          <div className='h-[100px]' />
        </div>
      </div>
    </div>
  )
}

export default AddBook