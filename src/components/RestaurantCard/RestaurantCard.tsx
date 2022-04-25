import "./restaurantCard.scss";

export const RestaurantCard = () => {
  return (
    <div className="restaurant-card" id="restaurant-card">
      <div
        className="restaurant-card__header"
        style={{
          backgroundImage:
            "https://cdn.snappfood.ir/350x233/uploads/images/vendors/covers/6058c93d8399c.png"
        }}
      >
        <div>salam</div>
        <div className="restaurant-card__logo" style={{backgroundImage: 'https://cdn.snappfood.ir/350x233/uploads/images/vendors/covers/6058c93d8399c.png'}}>salam</div>
      </div>

      <div className="restaurant-card__body">
        <div className="restaurant-card__info">
          <div className="restaurant-card__info-name">کبابی محمد</div>
          <div></div>
        </div>

        <div className="restaurant-card__tag"></div>

        <div className="restaurant-card__shipping">
          <div className="restaurant-card__shipping-title">ارسال اکسپرس</div>
          <div className="restaurant-card__shipping-price">۵.۵۰۰ تومان</div>
        </div>
      </div>
    </div>
  );
};
