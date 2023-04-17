import { json, useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader(){
  //we cannot use react hooks in the loader functions except that we can use browser features
  //like local storage, cookies, etc
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    // throw new Response(
    //   JSON.stringify({message: 'Could not fetch events'}), 
    //   {status: 500}
    // )
    throw json({message: 'Could not fetch events'},
      {status: 500}
    )
  } else {
    //const resData = await response.json();
    return response; //data fetched here will be available in all the child routes
  }
}