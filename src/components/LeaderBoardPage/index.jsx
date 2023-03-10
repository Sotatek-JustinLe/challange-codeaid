import "./style-leaderboard-page.scss";

const Title = () => {
  return (
    <div className="leaderboard-page-wrapper__title">League Standings</div>
  );
};

const Table = () => {
  const RowHeader = () => {
    return (
      <div className="row row--header">
        <div className="col col_1">Team Name</div>
        <div className="col col_2">MP</div>
        <div className="col col_3">GF</div>
        <div className="col col_3-4">GD</div>
        <div className="col col_4">GA</div>
        <div className="col col_5">Points</div>
      </div>
    );
  };

  const Row = () => {
    return (
      <div className="row">
        <div className="col col_1 font-bold">
          <div className="flag">
            <img src={"/vietnam.png"} alt="" />
          </div>
          <div className="country_name">VietNam</div>
        </div>
        <div className="col col_2">3</div>
        <div className="col col_3">8</div>
        <div className="col col_3-4">-1</div>
        <div className="col col_4">4</div>
        <div className="col col_5 font-bold font-bold--blue">7</div>
      </div>
    );
  };

  return (
    <div className="leaderboard-page-wrapper__table">
      <RowHeader />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
    </div>
  );
};

const LeaderBoardPage = () => {
  return (
    <div className="leaderboard-page-wrapper">
      <Title />
      <Table />
    </div>
  );
};

export default LeaderBoardPage;
