import React, { useState, useEffect } from 'react';

export default function Crud() {
    const [movies, setMovies] = useState([]);
    const [newMovie, setNewMovie] = useState({
        title: '',
        genre: '',
        year: '',
        image: '',
        description: ''
    });
    const [editingMovie, setEditingMovie] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
    const [imageUploadMode, setImageUploadMode] = useState('url'); // 'url' or 'file'

    // Load movies from localStorage on component mount
    useEffect(() => {
        const storedMovies = localStorage.getItem('movies');
        if (storedMovies) {
            setMovies(JSON.parse(storedMovies));
        } else {
            // Initialize with default movies if none exist
            const defaultMovies = [
                {
                    id: 1,
                    title: 'Movie 1',
                    genre: 'Action',
                    year: 2020,
                    image: 'https://via.placeholder.com/300x450/333/fff?text=Movie+1',
                    description: 'An exciting action movie with thrilling scenes.'
                },
                {
                    id: 2,
                    title: 'Movie 2',
                    genre: 'Comedy',
                    year: 2021,
                    image: 'https://via.placeholder.com/300x450/333/fff?text=Movie+2',
                    description: 'A hilarious comedy that will make you laugh out loud.'
                },
            ];
            setMovies(defaultMovies);
            localStorage.setItem('movies', JSON.stringify(defaultMovies));
        }
    }, []);

    // Save movies to localStorage whenever movies state changes
    useEffect(() => {
        if (movies.length > 0) {
            localStorage.setItem('movies', JSON.stringify(movies));
        }
    }, [movies]);

    // Handle image URL input
    const handleImageChange = (e) => {
        const url = e.target.value;
        setNewMovie({...newMovie, image: url});
        setImagePreview(url);
    };

    // Handle file upload
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const base64Image = event.target.result;
                setNewMovie({...newMovie, image: base64Image});
                setImagePreview(base64Image);
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle image URL for editing
    const handleEditImageChange = (e) => {
        const url = e.target.value;
        setEditingMovie({...editingMovie, image: url});
    };

    // Handle file upload for editing
    const handleEditFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const base64Image = event.target.result;
                setEditingMovie({...editingMovie, image: base64Image});
            };
            reader.readAsDataURL(file);
        }
    };

    // CREATE: Add a new movie
    const createMovie = () => {
        if (newMovie.title && newMovie.genre && newMovie.year) {
            const movie = {
                id: Date.now(),
                title: newMovie.title,
                genre: newMovie.genre,
                year: parseInt(newMovie.year),
                image: newMovie.image || 'https://via.placeholder.com/300x450/333/fff?text=No+Image',
                description: newMovie.description || 'No description available.'
            };
            setMovies([...movies, movie]);
            setNewMovie({ title: '', genre: '', year: '', image: '', description: '' });
            setImagePreview('');
            setImageUploadMode('url');
        }
    };

    // UPDATE: Edit an existing movie
    const updateMovie = () => {
        if (editingMovie && editingMovie.title && editingMovie.genre && editingMovie.year) {
            setMovies(movies.map(movie =>
                movie.id === editingMovie.id ? editingMovie : movie
            ));
            setEditingMovie(null);
        }
    };

    // DELETE: Remove a movie
    const deleteMovie = (id) => {
        if (window.confirm('Are you sure you want to delete this movie?')) {
            setMovies(movies.filter(movie => movie.id !== id));
        }
    };

    return (
        <div style={{
            padding: '20px',
            backgroundColor: '#141414',
            color: 'white',
            minHeight: '100vh',
            fontFamily: 'Arial, sans-serif'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h1 style={{
                    color: '#e50914',
                    marginBottom: '30px',
                    textAlign: 'center',
                    fontSize: '2.5em',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                }}>
                    🎬 Movie Admin Panel
                </h1>

                {/* CREATE Form */}
                <div style={{
                    marginBottom: '40px',
                    padding: '30px',
                    backgroundColor: '#2c2c2c',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                }}>
                    <h2 style={{ color: '#e50914', marginBottom: '20px', fontSize: '1.5em' }}>
                         Add New Movie
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '5px', color: '#ccc' }}>Title *</label>
                            <input
                                type="text"
                                placeholder="Enter movie title"
                                value={newMovie.title}
                                onChange={(e) => setNewMovie({...newMovie, title: e.target.value})}
                                style={inputStyle}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '5px', color: '#ccc' }}>Genre *</label>
                            <input
                                type="text"
                                placeholder="Enter genre (Action, Comedy, etc.)"
                                value={newMovie.genre}
                                onChange={(e) => setNewMovie({...newMovie, genre: e.target.value})}
                                style={inputStyle}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '5px', color: '#ccc' }}>Year *</label>
                            <input
                                type="number"
                                placeholder="Release year"
                                value={newMovie.year}
                                onChange={(e) => setNewMovie({...newMovie, year: e.target.value})}
                                style={inputStyle}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '5px', color: '#ccc' }}>Image Upload Method</label>
                            <select
                                value={imageUploadMode}
                                onChange={(e) => setImageUploadMode(e.target.value)}
                                style={inputStyle}
                            >
                                <option value="url">Image URL</option>
                                <option value="file">Upload File</option>
                            </select>
                        </div>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', color: '#ccc' }}>
                            {imageUploadMode === 'url' ? 'Image URL' : 'Upload Image File'}
                        </label>
                        {imageUploadMode === 'url' ? (
                            <input
                                type="url"
                                placeholder="https://example.com/movie-poster.jpg"
                                value={newMovie.image}
                                onChange={handleImageChange}
                                style={inputStyle}
                            />
                        ) : (
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileUpload}
                                style={inputStyle}
                            />
                        )}
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', color: '#ccc' }}>Description</label>
                        <textarea
                            placeholder="Enter movie description"
                            value={newMovie.description}
                            onChange={(e) => setNewMovie({...newMovie, description: e.target.value})}
                            style={{
                                ...inputStyle,
                                minHeight: '80px',
                                resize: 'vertical'
                            }}
                        />
                    </div>

                    {/* Image Preview */}
                    {imagePreview && (
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '10px', color: '#ccc' }}>Image Preview:</label>
                            <img
                                src={imagePreview}
                                alt="Preview"
                                style={{
                                    maxWidth: '200px',
                                    maxHeight: '300px',
                                    borderRadius: '8px',
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
                                }}
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/200x300/333/fff?text=Invalid+URL';
                                }}
                            />
                        </div>
                    )}

                    <button
                        onClick={createMovie}
                        style={addButtonStyle}
                    >
                        🎬 Add Movie
                    </button>
                </div>

                {/* READ: Display Movies */}
                <div>
                    <h2 style={{
                        color: '#e50914',
                        marginBottom: '20px',
                        fontSize: '1.8em',
                        borderBottom: '2px solid #e50914',
                        paddingBottom: '10px'
                    }}>
                        📋 Movies List ({movies.length} movies)
                    </h2>

                    {movies.length === 0 ? (
                        <div style={{
                            textAlign: 'center',
                            padding: '50px',
                            backgroundColor: '#2c2c2c',
                            borderRadius: '12px',
                            color: '#888'
                        }}>
                            <h3>No movies yet!</h3>
                            <p>Add your first movie using the form above.</p>
                        </div>
                    ) : (
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                            gap: '25px'
                        }}>
                            {movies.map(movie => (
                                <div key={movie.id} style={movieCardStyle}>
                                    {editingMovie && editingMovie.id === movie.id ? (
                                        // UPDATE Form
                                        <div>
                                            <h3 style={{ color: '#e50914', marginBottom: '15px' }}>✏️ Edit Movie</h3>

                                            <div style={{ display: 'grid', gap: '15px', marginBottom: '20px' }}>
                                                <input
                                                    type="text"
                                                    placeholder="Title"
                                                    value={editingMovie.title}
                                                    onChange={(e) => setEditingMovie({...editingMovie, title: e.target.value})}
                                                    style={editInputStyle}
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Genre"
                                                    value={editingMovie.genre}
                                                    onChange={(e) => setEditingMovie({...editingMovie, genre: e.target.value})}
                                                    style={editInputStyle}
                                                />
                                                <input
                                                    type="number"
                                                    placeholder="Year"
                                                    value={editingMovie.year}
                                                    onChange={(e) => setEditingMovie({...editingMovie, year: e.target.value})}
                                                    style={editInputStyle}
                                                />
                                                <div>
                                                    <label style={{ display: 'block', marginBottom: '5px', color: '#ccc', fontSize: '12px' }}>
                                                        Image URL or Upload New File
                                                    </label>
                                                    <input
                                                        type="url"
                                                        placeholder="Image URL"
                                                        value={editingMovie.image.startsWith('data:') ? '' : editingMovie.image}
                                                        onChange={handleEditImageChange}
                                                        style={editInputStyle}
                                                    />
                                                    <div style={{ marginTop: '10px' }}>
                                                        <label style={{ color: '#ccc', fontSize: '12px' }}>Or upload new image:</label>
                                                        <input
                                                            type="file"
                                                            accept="image/*"
                                                            onChange={handleEditFileUpload}
                                                            style={{...editInputStyle, marginTop: '5px'}}
                                                        />
                                                    </div>
                                                </div>
                                                <textarea
                                                    placeholder="Description"
                                                    value={editingMovie.description}
                                                    onChange={(e) => setEditingMovie({...editingMovie, description: e.target.value})}
                                                    style={{...editInputStyle, minHeight: '60px'}}
                                                />
                                            </div>

                                            <div style={{ display: 'flex', gap: '10px' }}>
                                                <button onClick={updateMovie} style={saveButtonStyle}>
                                                    💾 Save
                                                </button>
                                                <button onClick={() => setEditingMovie(null)} style={cancelButtonStyle}>
                                                    ❌ Cancel
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        // READ Display
                                        <div>
                                            <div style={{ position: 'relative', marginBottom: '15px' }}>
                                                <img
                                                    src={movie.image}
                                                    alt={movie.title}
                                                    style={movieImageStyle}
                                                    onError={(e) => {
                                                        e.target.src = 'https://via.placeholder.com/300x450/333/fff?text=No+Image';
                                                    }}
                                                />
                                                <div style={movieOverlayStyle}>
                                                    <span style={{ fontSize: '0.8em', color: '#ccc' }}>{movie.year}</span>
                                                </div>
                                            </div>

                                            <h3 style={{
                                                margin: '0 0 10px 0',
                                                color: '#e50914',
                                                fontSize: '1.2em',
                                                fontWeight: 'bold'
                                            }}>
                                                {movie.title}
                                            </h3>

                                            <p style={{
                                                margin: '5px 0',
                                                color: '#4CAF50',
                                                fontWeight: 'bold',
                                                fontSize: '0.9em'
                                            }}>
                                                 {movie.genre}
                                            </p>

                                            <p style={{
                                                margin: '10px 0',
                                                color: '#ccc',
                                                fontSize: '0.9em',
                                                lineHeight: '1.4'
                                            }}>
                                                {movie.description}
                                            </p>

                                            <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                                                <button
                                                    onClick={() => setEditingMovie(movie)}
                                                    style={editButtonStyle}
                                                >
                                                    ✏️ Edit
                                                </button>
                                                <button
                                                    onClick={() => deleteMovie(movie.id)}
                                                    style={deleteButtonStyle}
                                                >
                                                    🗑️ Delete
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

// Styles
const inputStyle = {
    width: '100%',
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #555',
    backgroundColor: '#333',
    color: 'white',
    fontSize: '14px',
    boxSizing: 'border-box'
};

const addButtonStyle = {
    backgroundColor: '#e50914',
    color: 'white',
    border: 'none',
    padding: '12px 30px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px',
    transition: 'background-color 0.3s'
};

const movieCardStyle = {
    border: '1px solid #555',
    padding: '20px',
    borderRadius: '12px',
    backgroundColor: '#2c2c2c',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s, box-shadow 0.3s'
};

const movieImageStyle = {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '8px'
};

const movieOverlayStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: '5px 10px',
    borderRadius: '4px'
};

const editInputStyle = {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #555',
    backgroundColor: '#333',
    color: 'white',
    boxSizing: 'border-box'
};

const saveButtonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    flex: 1
};

const cancelButtonStyle = {
    backgroundColor: '#666',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    flex: 1
};

const editButtonStyle = {
    backgroundColor: '#ffa500',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    flex: 1,
    fontSize: '14px'
};

const deleteButtonStyle = {
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    flex: 1,
    fontSize: '14px'
};