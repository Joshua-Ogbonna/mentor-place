import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { tribes } from "../../assets/data/tribes";
import MetaTagComponent from "../../components/Reusables/MetaTags";
import TribeNav from "../../components/Tribe/TribeNav";
import TribeSidebar from "../../components/Tribe/TribeSidebar";
import TribesMain from "../../components/Tribe/TribesMain";
import TribeUtil from "../../components/Tribe/TribeUtil";
import { Tribe as ITribe } from "../../utils/interfaces";
import "../Feeds/Feeds.css";
import "./tribe.css"

const Tribe = () => {

  return (
    <>
      <MetaTagComponent title={`Tribe `} />
      <TribeNav />
      <div className="home__layout">
        <TribeSidebar />
        <TribesMain />
        <TribeUtil />
      </div>
    </>
  );
};

export default Tribe;
