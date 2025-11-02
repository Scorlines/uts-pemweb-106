import React from 'react';

const BookDetail = ({ book, onClose, onAddToReadingList, isInReadingList }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="book-detail">
          <div className="detail-cover">
            {book.cover_id ? (
              <img 
                src={`https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`}
                alt={book.title}
              />
            ) : (
              <div className="no-cover-large">No Cover Available</div>
            )}
          </div>
          
          <div className="detail-info">
            <h2>{book.title}</h2>
            <p className="detail-author">by {book.author_name}</p>
            <p className="detail-year">First published: {book.first_publish_year}</p>
            
            <div className="detail-description">
              <h3>Description</h3>
              <p>
                {typeof book.description === 'string' 
                  ? book.description 
                  : book.description?.value || 'No description available'}
              </p>
            </div>
            
            {book.full_subjects && book.full_subjects.length > 0 && (
              <div className="detail-subjects">
                <h3>Subjects</h3>
                <div className="subjects-list">
                  {book.full_subjects.slice(0, 10).map((subject, index) => (
                    <span key={index} className="subject-tag">{subject}</span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="detail-actions">
              <button 
                onClick={() => onAddToReadingList(book)}
                disabled={isInReadingList}
                className="btn btn-primary"
              >
                {isInReadingList ? 'In Reading List' : 'Add to Reading List'}
              </button>
              <button onClick={onClose} className="btn btn-secondary">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;