import './InfoCard.css';

const InfoCard = ({ image, main, sub, date }) => (
  <div className="info-card">
    <img src={image} alt={sub} className="info-logo" />
    <div className="info-details">
      <div className="info-main">{main}</div>
      <div className="info-sub">{sub}</div>
      <div className="info-date">{date}</div>
    </div>
  </div>
);

export default InfoCard; 