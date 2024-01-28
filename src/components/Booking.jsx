import React, { useState } from "react";
import "./Booking.css";

function Booking() {
  const movies = ["Avengers: Endgame", "Chithha", "Leo", "Animal"];
  const [selectedSeats, setSelectedSeats] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedSeats, setSubmittedSeats] = useState({});
  const [selectedMovie, setSelectedMovie] = useState("");
  const ticket_price = 200;

  const rows = 8;
  const seatsPerRow = 8;

  const handleSeatClick = (row, seat) => {
    const selectedSeat = `${row}-${seat}`;

    if (isSubmitted) {
      return; // Don't allow changes after submission
    }

    setSelectedSeats((prevSelectedSeats) => {
      const movieSeats = prevSelectedSeats[selectedMovie] || [];

      if (movieSeats.includes(selectedSeat)) {
        return {
          ...prevSelectedSeats,
          [selectedMovie]: movieSeats.filter((s) => s !== selectedSeat),
        };
      } else {
        return {
          ...prevSelectedSeats,
          [selectedMovie]: [...movieSeats, selectedSeat],
        };
      }
    });
  };

  const handleSubmit = () => {
    setSubmittedSeats((prevSubmittedSeats) => ({
      ...prevSubmittedSeats,
      [selectedMovie]: selectedSeats[selectedMovie] || [],
    }));
    setIsSubmitted(true);
  };

  const handleMovieChange = (e) => {
    setIsSubmitted(false);
    const movie = e.target.value;
    setSelectedMovie(movie);
  };

  return (
    <div>
      <div className="movie-options">
        <label htmlFor="movies">Select a Movie: </label>
        <br />
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

                  const isSelected =
                    selectedSeats[selectedMovie]?.includes(seatId) || false;
                  const isSeatSubmitted =
                    isSubmitted &&
                    submittedSeats[selectedMovie]?.includes(seatId);

                  return (
                    <div
                      key={seatId}
                      className={`seat ${isSelected ? "green" : ""} ${
                        isSeatSubmitted ? "red" : ""
                      }`}
                      onClick={() => handleSeatClick(row + 1, seatNumber)}
                    >
                      {seatNumber}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          <p>
            You have selected {selectedSeats[selectedMovie]?.length || 0} for a
            price of: Rs.
            {selectedSeats[selectedMovie]?.length * ticket_price || 0}
          </p>

          <button onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default Booking;
