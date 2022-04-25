import "./restaurantCard.scss";

export const RestaurantCard = ({ ...props }) => {
  const data = props?.data;

  const handleShowDeliverFee = () => {
    switch (data?.deliveryFee) {
      case 0:
        return "رایگان";

      default:
        return data?.deliveryFee;
    }
  };

  const handleShowShipping = () => {
    switch (data?.isZFExpress) {
      case true:
        return "ارسال اکسپرس";

      default:
        return "پیک فروشنده";
    }
  };

  return (
    <div className="restaurant-card" id="restaurant-card">
      <div
        className="restaurant-card__header"
        style={{
          backgroundImage: `url(${data?.backgroundImage})`,
        }}
      >
        {data?.best_coupon && (
          <div className="restaurant-card__badge">{data?.best_coupon}</div>
        )}
        <div
          className="restaurant-card__logo"
          style={{
            backgroundImage: `url(${data?.defLogo})`,
          }}
        />
      </div>

      <div className="restaurant-card__body">
        <div className="restaurant-card__info">
          <div className="restaurant-card__info-name">{data?.title}</div>
          {data.rate !== 0 && (
            <div className="restaurant-card__rate">
              {data?.rate}
              {/* {data?.voteCount} */}
            </div>
          )}
        </div>

        <div className="restaurant-card__tag">{data?.description}</div>

        <div className="restaurant-card__shipping">
          <div className="restaurant-card__shipping-title">
            {handleShowShipping()}
          </div>
          <div className="restaurant-card__shipping-price">
            {handleShowDeliverFee()} تومان
          </div>
        </div>
      </div>
    </div>
  );
};
