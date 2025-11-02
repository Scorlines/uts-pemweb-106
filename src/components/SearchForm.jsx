import React from 'react';

const SearchForm = ({ onSearch, searchParams, setSearchParams }) => {
  const subjects = [
    '', 'fiction', 'science', 'history', 'biography', 'computer', 
    'fantasy', 'romance', 'mystery', 'children', 'art', 'philosophy'
  ];

  const subjectLabels = {
    '': 'Semua Subjek',
    'fiction': 'Fiksi',
    'science': 'Sains',
    'history': 'Sejarah',
    'biography': 'Biografi',
    'computer': 'Komputer',
    'fantasy': 'Fantasi',
    'romance': 'Roman',
    'mystery': 'Misteri',
    'children': 'Anak-anak',
    'art': 'Seni',
    'philosophy': 'Filsafat'
  };

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
      <h2>Cari Buku</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="searchBy">Cari Berdasarkan:</label>
          <select 
            id="searchBy"
            value={searchParams.searchBy}
            onChange={(e) => handleInputChange('searchBy', e.target.value)}
            className="form-select"
          >
            <option value="title">Judul</option>
            <option value="author">Penulis</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="query">Kata Kunci Pencarian:</label>
          <input
            type="text"
            id="query"
            value={searchParams.query}
            onChange={(e) => handleInputChange('query', e.target.value)}
            placeholder={`Masukkan ${searchParams.searchBy === 'title' ? 'judul' : 'penulis'} buku`}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Filter berdasarkan Subjek:</label>
          <select 
            id="subject"
            value={searchParams.subject}
            onChange={(e) => handleInputChange('subject', e.target.value)}
            className="form-select"
          >
            {subjects.map(subject => (
              <option key={subject} value={subject}>
                {subjectLabels[subject]}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="search-button">
          Cari Buku
        </button>
      </form>
    </div>
  );
};

export default SearchForm;