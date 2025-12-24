import { useNavigate } from 'react-router-dom';

const Card = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${encodeURIComponent(item.name)}`, { state: item });
  };

  return (
    <div className="child-item" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img src={item.img} alt={item.name} />
      <div>
        <h1>{item.name}</h1>
        <p>{item.price}</p>
      </div>
    </div>
  );
};

export default Card;
