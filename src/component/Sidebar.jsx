function SideBar({ textToDisplay }) {
  return (
    <aside className="sidebar">
      <div>
        <p>{textToDisplay}</p>
      </div>
    </aside>
  );
}

export default SideBar;
