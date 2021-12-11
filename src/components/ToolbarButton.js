const ToolbarButton = ({ label, action, setAction }) => {
  return (
    <button
      className={`m-2 btn ${action ? "btn-secondary" : "btn-outline-secondary"}`}
      onClick={() => setAction(!action)}
    >
      {label}
    </button>
  );
};

export default ToolbarButton;
