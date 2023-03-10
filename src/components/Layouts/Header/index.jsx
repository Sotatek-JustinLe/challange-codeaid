import { useHistory } from "react-router-dom";
import "./style-header.scss";

const Header = () => {
  const history = useHistory();

  return (
    <div className="header-wrapper">
      <div className="header-wrapper__left">
        <img src="/Images/logo.svg" alt="" />
      </div>
      <div className="header-wrapper__right">
        <div
          className="link"
          onClick={() => {
            history.push("/schedule");
          }}
        >
          <img src="/Images/schedule.png" alt="" />
          <div>Schedule</div>
        </div>
        <div
          className="link"
          onClick={() => {
            history.push("/leaderboard");
          }}
        >
          <img src="/Images/leaderboard.png" alt="" />
          <div>Leaderboard</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
