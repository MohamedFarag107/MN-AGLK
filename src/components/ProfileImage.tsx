import React from 'react'
export const getImageUrl = (profileImage: string) => `http://localhost:8000/users/${profileImage}`
export const getBookImageUrl = (bookImage: string) => `http://localhost:8000/BooksImage/${bookImage}`
export const getBookPdfUrl = (bookPdf: string) => `http://localhost:8000/BooksFile/${bookPdf}`
function ProfileImage({ profileImage }: { profileImage: string }) {
  return profileImage ? <img className='rounded-full' src={getImageUrl(profileImage)} alt="profileImage" /> : <img className='rounded-full' src="https://firebasestorage.googleapis.com/v0/b/mn-aglk.appspot.com/o/icons8-customer-240.png?alt=media&token=6990c1d2-53df-4677-8ee3-63e7c8fc8787" alt="" />
}

export default ProfileImage