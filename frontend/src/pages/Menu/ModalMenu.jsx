const Modal = ({ item, onClose }) => {
    if (!item) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <h2>{item.menu_name}</h2>
                <img src={item.menu_image} alt={item.menu_name} />
                <p>{item.description || "No description available."}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};


export default Modal;