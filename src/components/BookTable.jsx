import React from 'react';

const BookTable = ({ books, onBookSelect, onAddToReadingList, readingList }) => {
  if (books.length === 0) {
    return (
      <div className="book-table empty">
        <h2>Book Results</h2>
        <p>No books found. Try searching for a book title or author.</p>
      </div>
    );
  }

  return (
    <div className="book-table">
      <h2>Book Results ({books.length} books)</h2>
      
      <div className="books-grid">
        {books.map(book => (
          <div key={book.key} className="book-card">
            <div className="book-cover">
              {book.cover_id ? (
                <img 
                  src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
                  alt={book.title}
                  onClick={() => onBookSelect(book)}
                />
              ) : (
                <div className="no-cover" onClick={() => onBookSelect(book)}>
                  No Cover
                </div>
              )}
            </div>
            
            <div className="book-info">
              <h3 onClick={() => onBookSelect(book)} className="book-title">
                {book.title}
              </h3>
              <p className="book-author">by {book.author_name}</p>
              <p className="book-year">Published: {book.first_publish_year}</p>
              
              <div className="book-actions">
                <button 
                  onClick={() => onBookSelect(book)}
                  className="btn btn-secondary"
                >
                  View Details
                </button>
                
                <button 
                  onClick={() => onAddToReadingList(book)}
                  disabled={readingList.some(item => item.key === book.key)}
                  className="btn btn-primary"
                >
                  {readingList.some(item => item.key === book.key) ? 'Added' : 'Add to List'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookTable;