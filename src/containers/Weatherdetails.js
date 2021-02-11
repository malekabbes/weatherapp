import React,{useEffect,useState} from "react";
import {useParams,useHistory} from "react-router-dom";
import TodayWeather from "../Components/TodayWeather";
import axios from "axios";
import WeatherDays from "../Components/WeatherDays";
import Navbar from "../Components/Navbar";
import TextField from '@material-ui/core/TextField';
function Weatherdetails(){
    const history = useHistory();
    const {city} = useParams();
    const [daylist,setDaylist] = useState([]);
    const [loading,setLoading]= useState(true);
    const [data,setData]= useState();
    const [error,setError]=useState(false);
    const apikeys="ac4a8e70ead307c1b1aa6503e87e6f6a"; 
    const WeatherDaysList=daylist.map((el)=>{
        return <WeatherDays data={el} />;
    })
    
    const getEveryDayFirst3hoursWeather = (array)=>{
    let count=0;
    let result =[];
    array.forEach((element,index)=>{
      if (index-8 === count || (count === 0 && index ===0)){
          count=index;
          result.push(element);
      }
    });
    return result;
}
const retrievedatafromapi =(city)=>{
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikeys}&units=metric`
    ).then(
        (data)=>{
            console.log(data);
           setDaylist(getEveryDayFirst3hoursWeather(data.data.list));
            setData(data.data);
            setLoading(false);
            setError(false);
        })
        .catch((e) => {
            setError(true);
            setLoading(false);
          });
}
    useEffect(()=>{
       retrievedatafromapi(city);
    }, []);
    
    return(
               <div>
                   <Navbar 
                   goback={()=>history.push("/")}
                   search={<TextField onChange={(e)=>retrievedatafromapi(e.target.value)} />} 
                    />
            {loading? ( <h1>Loading</h1>)
            : error?( <h1 style={{color:"red",font:"GothamLightRegular"}}>Wrong city or connexion problems</h1> )
            :(
                <div>
                    <TodayWeather data={data} /> {WeatherDaysList}
                </div>
            )}
        </div>
    );
}
export default Weatherdetails;