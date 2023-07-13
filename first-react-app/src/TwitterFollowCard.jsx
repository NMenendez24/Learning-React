import { useState } from "react";

export function TwitterFollowCard({ userName, name }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    if (isFollowing) {
      setIsHovered(true);
    }
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const text = isHovered && isFollowing ? "Stop Following" : isFollowing ? "Following" : "Follow";

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" src={`https://unavatar.io/twitter/${userName}`} alt="User Avatar" />
        <div className="tw-followCard-info">
          <strong className="tw-followCard-name">{name}</strong>
          <span className="tw-followCard-user">{userName}</span>
        </div>
      </header>
      <aside>
        <button
          className={buttonClassName}
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {text}
        </button>
      </aside>
    </article>
  );
}