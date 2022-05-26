import React from "react"

const InfoPage = ( { values } ) => {

    console.log(values);

  return (
    <div className="infoPage">
        <ul>
            <li>Name : {values.name}</li>
            <li>E-Mail : {values.email}</li>
            <li>Favorite Color : <span className="box" style={{backgroundColor:values.favoriteColor}} >{values.favoriteColor}</span> </li>
        </ul>
     
    </div>
  )
};

export default InfoPage;
