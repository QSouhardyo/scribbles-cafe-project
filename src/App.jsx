import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [bookmarked, setBookmarked] = useState([])
  const [markRead, setMarkAsRead] = useState(0)

  const handleBookmarked = (blog) => {
    const existingBookmark = bookmarked.find(mark => mark.id === blog.id)

    if (!existingBookmark) {
      setBookmarked([...bookmarked, blog])
    }

  }

  const handleMarkAsRead = (time, id) => {
    setMarkAsRead(markRead + time)
    handleRemoveBookmark(id)
  }

  const handleRemoveBookmark = (id) => {
    const remainingBookMark = bookmarked.filter(mark => mark.id !== id)
    setBookmarked(remainingBookMark)
  }

  return (
    <div>
      <Navbar></Navbar>


      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Blogs handleBookmarked={handleBookmarked} handleMarkAsRead={handleMarkAsRead}></Blogs>
        </div>
        <div className="right-container w-[30%]">
          <h1>Reading time: {markRead}</h1>
          <h1>Bookmarked count: {bookmarked.length}</h1>
          {
            bookmarked.map(bookmark => <p className='bg-orange-600 tex-white p-2 m-2 rounded-3xl'>{bookmark.title}</p>)
          }
        </div>
      </div>
    </div>
  )
}

export default App
