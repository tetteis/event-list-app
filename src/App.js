import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);

  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser's live stream", id: 2 },
    { title: "race on moo moo farm", id: 3 },
  ]);

  const toggle = () => {
    setShowEvents(!showEvents);
    console.log(showEvents);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };

  return (
    <div className="App">
      <Title />
      <button onClick={toggle}>
        {showEvents ? "hide events" : "show events"}
      </button>

      <div>
        {showEvents && <EventList events={events} handleClick={handleClick} />}
      </div>
      {showModal && (
        <Modal handleClose={handleClose} isSalesModal={true}>
          <NewEventForm />
        </Modal>
      )}
      <div>
        <button onClick={handleOpen}>Add New Event</button>
      </div>
    </div>
  );
}

export default App;
