import "./AnnouncementBar.css";

function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <p>
        Hi, this is my personal website and currently in development.
        More exciting things coming soon!
      </p>
      <span className="announcement-close">×</span>
    </div>
  );
}

export default AnnouncementBar;