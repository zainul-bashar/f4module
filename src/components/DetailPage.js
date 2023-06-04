import React from "react";
import { useSelector } from "react-redux";
 const DetailPage = () => {
    const {detailPage} = useSelector((state) => state.detail);
if(!detailPage) return <h1>Loading...</h1>
    return(
        <div>
                    <div key={detailPage.userId}>
                        <h2>{detailPage.title}</h2>
                        <h3>{detailPage.body}</h3>
                    </div>
 
            
        </div>
    )
 }

 export default DetailPage;