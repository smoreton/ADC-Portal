import React from "react";

import StarRating from "react-star-rating";

class StarRatingComponent extends React.Component {
  render() {
    return (
      <form target="_self" method="GET">
        <StarRating
          name="small-rating"
          caption="Small!"
          size={30}
          totalStars={5}
        />

        <button type="submit" className="btn btn-primary">
          Submit Rating
        </button>
      </form>
    );
  }
}

React.render(<StarRatingComponent />, document.getElementById("star-rating"));

export default StarRatingComponent;
