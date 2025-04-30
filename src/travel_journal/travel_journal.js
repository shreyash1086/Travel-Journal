import Card  from "./data";
import Head from "./travel_journal_head";
import Body from "./travel_journal_body";

export default function Traveljournal(){
  const Carddata = Card.map(data=>{
    return(
      <Body 
        {...data}
      /> 
    )
  })
    return(
        <>
          <Head/> 
          <section className="MainCard">
            {Carddata}
          </section>
        </>
    )
};