import { useHistory } from "react-router-dom";
import { Button } from "../components";

const Home = () => {
  const history = useHistory();

  const buttonClickHandler = () => {
    history.push("/vendors");
  };

  return (
    <div className="home">
      <div className="home__card">
        <div className="home__title">به task تست اسنپ‌فود خوش‌آمدید</div>
        <Button onClick={buttonClickHandler}>مشاهده‌ی لیست رستوران‌ها</Button>
      </div>
    </div>
  );
};

export default Home;
