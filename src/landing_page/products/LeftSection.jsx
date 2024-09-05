import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  lernMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
     <div className="row">

        <div className="col-6 p-5">
            <img src={imageURL} />
        </div>
        <div className="col-6 p-5 mt-5">
            <h1>{productName}</h1>
            <p>{productDescription}</p>
           <div >
           <a href={tryDemo} style={{textDecoration: "none"}}>Try Demo</a>
           <a href={lernMore} style={{marginLeft: "120px", textDecoration: "none"}}>Lern More</a>
           </div>
           <div className="mt-3">
           <a href={googlePlay}><img src="media\image\googlePlayBadge.svg" /></a>
           <a href={appStore} style={{marginLeft: "50px"}}><img src="media\image\appstoreBadge.svg" /></a>
           </div>
        </div>

     </div>
    </div>
  );
}

export default LeftSection;
