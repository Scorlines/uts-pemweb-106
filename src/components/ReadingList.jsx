import React from 'react';

const ReadingList = ({ readingList, onRemove, onBookSelect }) => {
  return (
    <div className="reading-list">
      <h2>Daftar Bacaan Saya ({readingList.length})</h2>
      
      {readingList.length === 0 ? (
        <p className="empty-list">Daftar bacaan Anda masih kosong.</p>
      ) : (
        <div className="reading-list-items">
          {readingList.map(book => (
            <div key={book.key} className="reading-list-item">
              <div 
                className="item-cover"
                onClick={() => onBookSelect(book)}
              >
                {book.cover_id ? (
                  <img 
                    src={`https://covers.openlibrary.org/b/id/${book.cover_id}-S.jpg`}
                    alt={book.title}
                  />
                ) : (
                  <div className="no-cover-small">Tidak Ada Sampul</div>
                )}
              </div>
              
              <div className="item-info">
                <h4 onClick={() => onBookSelect(book)} className="item-title">
                  {book.title.length > 30 
                    ? `${book.title.substring(0, 30)}...` 
                    : book.title}
                </h4>
                <p className="item-author">{book.author_name}</p>
              </div>
              
              <button 
                onClick={() => onRemove(book.key)}
                className="remove-button"
                title="Hapus dari daftar"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReadingList;