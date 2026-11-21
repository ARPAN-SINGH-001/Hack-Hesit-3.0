import "../css/floatingMoney.css";

function FloatingMoney() {
  return (
    <div className="floating-money" aria-hidden="true">
      <div className="money-storm">
        <img
          src="/assets/money-storm.png"
          alt=""
          className="money-storm-image"
        />
      </div>
    </div>
  );
}

export default FloatingMoney;




