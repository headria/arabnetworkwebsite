import BaseButton from "../button";

const BuyButton = ({ className = "nav-buycoin" }) => {
  return (
    <div className={className}>
      <BaseButton className="btn-primary">
        <a href="/">Buy ARAB Coin</a>
      </BaseButton>
    </div>
  );
};

export default BuyButton;
