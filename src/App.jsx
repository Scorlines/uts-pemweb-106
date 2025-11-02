import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import BookTable from './components/BookTable';
import BookDetail from './components/BookDetail';
import ReadingList from './components/ReadingList';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  const [readingList, setReadingList] = useState([]);
  const [searchParams, setSearchParams] = useState({
    query: '',
    searchBy: 'title',
    subject: ''
  });

  // Load reading list from localStorage on component mount
  useEffect(() => {
    const savedReadingList = localStorage.getItem('readingList');
    if (savedReadingList) {
      setReadingList(JSON.parse(savedReadingList));
    }
  }, []);

  // Save reading list to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('readingList', JSON.stringify(readingList));
  }, [readingList]);

  const searchBooks = async (searchParams) => {
    setLoading(true);
    setError('');
    
    try {
      let url = '';
      if (searchParams.searchBy === 'title') {
        url = `https://openlibrary.org/search.json?title=${encodeURIComponent(searchParams.query)}`;
      } else {
        url = `https://openlibrary.org/search.json?author=${encodeURIComponent(searchParams.query)}`;
      }
      
      if (searchParams.subject) {
        url += `&subject=${encodeURIComponent(searchParams.subject)}`;
      }

      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch books');
      
      const data = await response.json();
      const booksWithDetails = data.docs.slice(0, 50).map(book => ({
        key: book.key,
        title: book.title,
        author_name: book.author_name ? book.author_name[0] : 'Penulis Tidak Diketahui',
        first_publish_year: book.first_publish_year || 'Tidak Diketahui',
        isbn: book.isbn ? book.isbn[0] : null,
        cover_id: book.cover_i,
        subject: book.subject ? book.subject.slice(0, 5) : []
      }));
      
      setBooks(booksWithDetails);
    } catch (err) {
      setError('Kesalahan dalam mengambil data buku: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const getBookDetails = async (bookKey) => {
    try {
      const response = await fetch(`https://openlibrary.org${bookKey}.json`);
      if (!response.ok) throw new Error('Failed to fetch book details');
      
      const data = await response.json();
      return data;
    } catch (err) {
      console.error('Error fetching book details:', err);
      return null;
    }
  };

  const handleBookSelect = async (book) => {
    const detailedBook = await getBookDetails(book.key);
    setSelectedBook({
      ...book,
      description: detailedBook?.description || 'Tidak ada deskripsi tersedia',
      full_subjects: detailedBook?.subjects || []
    });
  };

  const addToReadingList = (book) => {
    if (!readingList.find(item => item.key === book.key)) {
      setReadingList(prev => [...prev, book]);
    }
  };

  const removeFromReadingList = (bookKey) => {
    setReadingList(prev => prev.filter(book => book.key !== bookKey));
  };

  return (
    <div className="App">
      <Header />
      
      <div className="main-container">
        <div className="sidebar">
          <SearchForm 
            onSearch={searchBooks}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
          
          <ReadingList 
            readingList={readingList}
            onRemove={removeFromReadingList}
            onBookSelect={handleBookSelect}
          />
        </div>
        
        <div className="content">
          {loading && <div className="loading">Memuat buku...</div>}
          {error && <div className="error">{error}</div>}
          
          <BookTable 
            books={books}
            onBookSelect={handleBookSelect}
            onAddToReadingList={addToReadingList}
            readingList={readingList}
          />
        </div>
      </div>
      
      {selectedBook && (
        <BookDetail 
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
          onAddToReadingList={addToReadingList}
          isInReadingList={readingList.some(book => book.key === selectedBook.key)}
        />
      )}
    </div>
  );
}

export default App;