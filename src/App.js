import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";

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
          <h2>Terms and Conditions</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            eveniet laboriosam. Earum, sed alias eligendi quam repellat iure
            provident aliquam iusto voluptate nostrum sequi voluptas facilis,
            ipsam molestiae consequuntur velit.
          </p>
        </Modal>
      )}
      <div>
        <button onClick={handleOpen}>show modal</button>
      </div>
    </div>
  );
}

export default App;
