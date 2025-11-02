import React from 'react';

const SearchForm = ({ onSearch, searchParams, setSearchParams }) => {
  const subjects = [
    '', 'fiction', 'science', 'history', 'biography', 'computer', 
    'fantasy', 'romance', 'mystery', 'children', 'art', 'philosophy'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchParams.query.trim()) {
      onSearch(searchParams);
    }
  };

  const handleInputChange = (field, value) => {
    setSearchParams(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="search-form">
      <h2>Search Books</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="searchBy">Search By:</label>
          <select 
            id="searchBy"
            value={searchParams.searchBy}
            onChange={(e) => handleInputChange('searchBy', e.target.value)}
            className="form-select"
          >
            <option value="title">Title</option>
            <option value="author">Author</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="query">Search Query:</label>
          <input
            type="text"
            id="query"
            value={searchParams.query}
            onChange={(e) => handleInputChange('query', e.target.value)}
            placeholder={`Enter book ${searchParams.searchBy}`}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Filter by Subject:</label>
          <select 
            id="subject"
            value={searchParams.subject}
            onChange={(e) => handleInputChange('subject', e.target.value)}
            className="form-select"
          >
            {subjects.map(subject => (
              <option key={subject} value={subject}>
                {subject || 'All Subjects'}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="search-button">
          Search Books
        </button>
      </form>
    </div>
  );
};

export default SearchForm;