import React,{ useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Title from "../Components/Title";
import CloudIcon from '@material-ui/icons/Cloud';
import {useHistory} from "react-router-dom";
import classes from "../App.css";
import classes1 from "../Components/main.module.css";
import classes2 from "../Components/title.module.css";
import logo from "../img/app.png";
function HomeContainer() {
  const [title,setTitle] = useState(""); //title = ("") c'est la valeur par default du state
  const [city,setCity] = useState("");
  const history = useHistory();
  const handleonchange =(e)=>{
    setTitle(e.target.value)
    setCity(e.target.value)
  }
  const useStyles = makeStyles({
    btn1: {
      background: 'linear-gradient(45deg, #064CFF 30%, #06A3FF 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
    search: {
     color:'#064CFF',
    }
  }); 
  const classes = useStyles();
  return (
    <div className={classes1.home}>
      <div className={classes1.main}>
     <img src={logo} alt="logo" style={{ color:'#5e94fe', width:'6vw' }} />
     <Title name={classes2.titre} title={title === ""? "Meteo APP" : title} color="blue" />
      <TextField  className={classes.search} onChange={handleonchange} id="standard-basic" label="Search here" /><br></br><br></br>
      <Button className={classes.btn1} onClick={() => history.push(`/weather/${city}`)}  variant="outlined" color="primary">Search</Button>
      <div style={{position:"absolute",bottom:"0",right:"10px"}}>
      <Title name={classes2.cp} title={"made with ❤️ by Malek abbes"} color="blue" />
      </div>
      </div>
    </div>
  );
}

export default HomeContainer;
