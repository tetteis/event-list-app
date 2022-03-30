import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
    setShowModal(false);
  };

  const toggle = () => {
    setShowEvents(!showEvents);
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
        <Modal isSalesModal={true}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}
      <div>
        <button onClick={handleOpen} className="event-button">
          Add New Event
        </button>
      </div>
    </div>
  );
}

export default App;
