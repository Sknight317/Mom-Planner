import React from "react";
import Thumbnail from "../Thumbnail";
import AddBtn from "../AddBtn";


// export function CardList({ children }) {
//   return <ul className="list-group">{children}</ul>;
// }

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function CardListItem({
  thumbnail = "https://placehold.it/300x300",
  title,
  location,
  url,
  Address,
  Place,
  Description,
 
}) {
  return (
 
  <div class="card small">
    {/* <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="#" alt="hello"/>
       <Thumbnail src={thumbnail} />
    </div> */}
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">{title}<i class="material-icons right">more_vert</i></span>
            <p>{Place} </p>
            <p>{Address}</p>
            <p>{location}</p>
            <AddBtn/>
            {/* <a class="btn-floating halfway-fab waves-effect waves-light red" onClick={this.add}><i class="material-icons">add</i></a> */}
      <p><a rel="noreferrer noopener" target="_blank" href={url}>Click Here for more information.</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Description<i class="material-icons right">close</i></span>
      <p>{Description}</p>
    </div>
    </div>
 
 
  );
}
  