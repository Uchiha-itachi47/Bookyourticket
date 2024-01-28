import React, { useState } from "react";
import "./Booking.css";

function Booking() {
  const movies = ["Avengers: Endgame", "Chithha", "Leo", "Animal"];
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("");
  const ticket_price = 200;

  const rows = 8;
  const seatsPerRow = 8;

  const handleSeatClick = (row, seat) => {
  const selectedSeat = `${row}-${seat}`;
  
    setSelectedSeats((prevSeats) => {
      if (prevSeats.includes(selectedSeat)) {
        return prevSeats.filter((s) => s !== selectedSeat);
      } else {
        return [...prevSeats, selectedSeat];
      }
    });
  };
  

  const handleSubmit = () => {
    const selectedSeatsElements = document.querySelectorAll(".seat.selected");
    selectedSeatsElements.forEach((seat) => {
      seat.style.backgroundColor = "#f44336"; // Change the background color to red
    });
  
  };

  const handleMovieChange = (e) => {
    const movie = e.target.value;
    setSelectedMovie(movie);
    setSelectedSeats([]);
  };

  return (
    <div>
      <div className="movie-options">
        <label htmlFor="movies">Select a Movie: </label><br />
        <select
          id="movies"
          name="Movies"
          value={selectedMovie}
          onChange={handleMovieChange}
        >
          <option value="" disabled>
            Select a movie
          </option>
          {movies.map((movie) => (
            <option key={movie} value={movie}>
              {movie}
            </option>
          ))}
        </select>
      </div>

      {selectedMovie && (
        <div className="movie-container">
          <h2>{selectedMovie}</h2>
          <div className="seat-grid">
            {Array.from({ length: rows }, (_, row) => (
              <div key={row} className="seat-row">
                {Array.from({ length: seatsPerRow }, (_, seat) => {
                  const seatNumber = seat + 1;
                  const seatId = `${row + 1}-${seatNumber}`;
                  const isSelected = selectedSeats.includes(seatId);

                  return (
                    <div
                      key={seatId}
                      className={(`seat ${isSelected ? " selected" : ""}`)}
                      onClick={() => handleSeatClick(row + 1, seatNumber)}
                    >
                      {seatNumber}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          <p>You have selected {selectedSeats.length } for a price of: Rs.{selectedSeats.length * ticket_price}</p>

          <button onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default Booking;
