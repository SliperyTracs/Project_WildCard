import styles from "../../../styles/User/Ranking.module.css"
import Layout from "../../../Component/layout";
import { handler } from "../../api";
import {useState,useEffect} from "react";
import { useRouter } from "next/router";

export default function Ranking({Menus,Polls,Selections,Votes}){
  const MenusId = new Array()
  var current = new Date()
  const router = new useRouter()
  const [Loading, setLoading] = useState(true)
  const [PollDate, setPollDate] = useState(new Date());
  const [MenusPoll, setMenusPoll] = useState([]);
  const [PreferedMenus , setPreferedMenus] = useState([]);
  const [PollId , setPollId] = useState()
  function checkDates(date){
    var day = current.getDate(); 
    if (day<10){
        day = '0' + day;
    }
    

    Polls?.map(poll=>{
      var Startdate = new Date(poll.StartDate)
      var Enddate = new Date(poll.EndDate)
      if (Startdate.getFullYear()>current.getFullYear()){return}
      if (Startdate.getMonth()>current.getMonth()){return}
      if (Startdate.getDate()>current.getDate()){return}
      if (Enddate.getFullYear()<current.getFullYear()){return}
      if (Enddate.getMonth()<current.getMonth()){return}
      if (Enddate.getDate()<current.getDate()){return}
      setPollId(poll.id)
    })
  }
  useEffect(() => {
    if (Menus.length>0){
      setLoading(true)
    }
    setLoading(false)
    checkDates()
    Selections?.map(selection =>{
      if (selection.Poll==PollId){
        MenusId.push(selection.Menus)
      }
    })
    setMenusPoll(MenusId.map((id) => id))
    console.log(MenusPoll)
  },[Loading])
  const HandleOnCheck = (e) => {
    const menu = e.target.value
      if (e.target.checked){
        setPreferedMenus([...PreferedMenus,menu])
      }
      else {
        setPreferedMenus(current =>
          current.filter(id => {
              return id.toString() !== e.target.value 
          }),)
      }
      console.log(PreferedMenus)
  }
  function HandleOnSubmit(e){
    console.log("im alive")
    {PreferedMenus?.map(MenuId => {
      const vote = Votes.find(obj => obj.Menus.toString() === MenuId);
      vote.Votes = vote.Votes + 1
      console.log(vote.Votes)
      e.preventDefault()
      const options ={
      method: "PUT",
      body: JSON.stringify({
          Votes : vote.Votes,
          Menus : vote.Menus,
          Poll : vote.Poll
      }),
      headers:{
          'Content-Type':'application/json'
      }
      }
      fetch(`http://127.0.0.1:8000/api/votes/${vote.id}`,options).
      then(res=>res.json()).then(response=>console.log(`response`,response)).catch(console.error())
      router.push()
   })}
  }
  return (
    <Layout>
      <div className={styles.ListContainer}>
            <ul className={styles.list}>
              {MenusPoll?.map(MenuId => {
                  const menu = Menus.find(obj => obj.id === MenuId); 
                  return (
                    <li className={styles.card} key={menu.id}>
                    <span>
                         <h2>{menu.Name}</h2>
                        {menu.Description}
                    </span>
                    <input className={styles.input} onChange={HandleOnCheck} type="checkbox" value={menu.id}/>
                    </li>)
                })}
            </ul>
        </div>
        <button className="btn btn-primary btn-lg" onClick={HandleOnSubmit}>Submit</button>
    </Layout>
  )
};
export async function getStaticProps(){
  const Menus = await handler("http://127.0.0.1:8000/api/menu")
  const Polls = await handler("http://127.0.0.1:8000/api/poll")
  const Selections = await handler("http://127.0.0.1:8000/api/selection")
  const Votes = await handler("http://127.0.0.1:8000/api/votes")
  return {
    props:{
      Menus,
      Polls,
      Selections,
      Votes
    }
  }
}
