module.exports = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)'
  },
  content: {
    position: 'absolute',
    top: '20%',
    left: '20%',
    // right: '100px',
    // bottom: '100px',
    width: '300px',
    height: '400px',
    backgroundColor: '#e9eff4',
    border: '1px solid #ccc',
    background: '#fff',
    borderRadius: '10px',
    outline: 'none',
    padding: '0 0 20px 20px',
    opacity: '0',
    transition: 'opacity 0.25s'
  }
};
