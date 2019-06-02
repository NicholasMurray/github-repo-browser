import React, {useState} from 'react';
import './RepoListItem.css';
import { Link } from '@flexera/ui-react-components';

interface RepoProps {
  url: "",
  name: "",
  description: "",
  avatar_url: ""
}

const RepoListItem: React.FC<RepoProps>= ({url, name, description, avatar_url}) => {

  const [like, setLike] = useState(0);

  function handleLikeClick() {
    setLike(like + 1);
  }

  return (
    <div className="RepoListItem">
        <div>
          <img src={avatar_url} alt={name} title={name} />
        </div>
        <div>
          <Link href={url} target="_BLANK">{name}</Link>
          <div>
          { !(description === null) ? description.substring(0, 20) + '...' : 'Description not available'}
          </div>
        </div>
        <div>
          <button className="LikeButton" onClick={handleLikeClick}>
            {
              like % 2 === 0 
              ? <span role="img" aria-label="unlike">❎</span> 
              : <span role="img" aria-label="like">✅</span> }
          </button>
        </div>
    </div>
  );
}

export default RepoListItem;