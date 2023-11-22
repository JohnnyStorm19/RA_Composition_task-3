import { useState } from "react";

export function Collapse({
  collapsedLabel = true,
}: {
  collapsedLabel?: boolean;
  expandedLabel?: boolean;
}) {
  const [collapse, setCollapse] = useState(collapsedLabel);

  const handleBtnClick = () => {
    setCollapse(!collapse);
  };
  return (
    <div className="collapse-container">
      <button 
        className="collapse-btn"
        type="button" 
        onClick={handleBtnClick}
    >
        Collapsing button
      </button>
        <div className={`collapse-content-container ${!collapse ? 'collapsed': ''}`}>
            <div className="collapse-content">
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>
    </div>
  );
}
