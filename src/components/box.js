
import React ,{useState, useEffect} from "react";
import axios from "axios";


const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc";





function Box(props){
        

        const [data,setData] = useState();

        useEffect(()=>{ axios(`${url}`).then(res => {
                const stats = res.data.slice(0,10);
                console.log(stats);
                setData(stats)
            });
            }
        ,[]); 

        

    return <div>
        {data?.map((each)=> 
        <div key={each.market_cap_rank} className="tile">
            <h1> #{each.market_cap_rank}</h1>
            <img height="50px" width="50px" src={each.image} alt="logo"></img>
            <h2> {each.name}</h2>
            <h3> Current Price : ${each.current_price}</h3>
        </div>)}
    </div>
};

export default Box;