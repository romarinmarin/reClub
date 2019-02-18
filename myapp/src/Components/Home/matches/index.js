import React from "react";
import { Tag } from "../../Ui/misc";
import MatchesList from "./MatchesList";

const MatchesHome = () => {
  return (
    <div className="home_matches_wrapper">
      <div className="container">
        <Tag background="#0e1731" fontSize="50px" color="#ffffff">
          Matches
        </Tag>
        <MatchesList />
        <Tag
          background="#ffffff"
          fontSize="22px"
          color="#0e1731"
          isLinked={true}
          linkTo="/the_team"
        >
          See more matches
        </Tag>
      </div>
    </div>
  );
};

export default MatchesHome;
