import React from "react";
import PropTypes from "prop-types";
import { Badge, OverlayTrigger, Popover } from "react-bootstrap";

const FirstOnSiteBadge = ( { observation, taxon } ) => {
  let targetTaxon = taxon;
  if ( !targetTaxon ) {
    if ( !observation || !observation.taxon ) {
      return <div />;
    }
    targetTaxon = observation.taxon;
  }
  console.log( observation );
  //observation.user.id
  console.log( targetTaxon );
  if ( !( targetTaxon.rank_level <= 20 ) ) {
    // taxon is not genus or lower
    return <div />;
  }
  const popover = (
    <Popover
      className="FirstOnSiteBadge"
      id="fosb-popover"
    >
      <span className="bold">
        { I18n.t( "this_is_the_first_known_observation_of_this_taxon_on_site", "iNaturalist" ) }
      </span>
    </Popover>
  );
  return (
    <div className="FirstOnSiteBadge">
      <OverlayTrigger
        trigger="click"
        rootClose
        overlay={popover}
        placement="bottom"
      >
        <Badge>
          <i className="fa fa-bookmark" />
          { I18n.t( "first_on_site", "iNat" ) }
        </Badge>
      </OverlayTrigger>
    </div>
  );
};

FirstOnSiteBadge.propTypes = {
  observation: PropTypes.object,
  taxon: PropTypes.object
};

export default FirstOnSiteBadge;
