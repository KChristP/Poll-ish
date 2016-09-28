module.exports = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    msTransform: "translate(-50%, 50%)", /* IE 9 */
    webkitTransform: "translate(-50%, -50%)", /* Safari */
    transform: "translate(-50%, -50%)",
    // right: '100px',
    // bottom: '100px',
    width: '400px',
    minHeight: '330px',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    background: '#fff',
    borderRadius: '10px',
    outline: 'none',
    padding: '0 0 0 0',
    opacity: '0',
    transition: 'opacity 0.25s'
  }
};
