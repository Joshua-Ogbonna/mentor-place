import React from "react";
import MetaTags from "react-meta-tags";

const MetaTagComponent = ({title}: {title: string}) => {
  return (
    <div>
      <MetaTags>
        <title>{title}</title>
      </MetaTags>
    </div>
  );
};

export default MetaTagComponent;
