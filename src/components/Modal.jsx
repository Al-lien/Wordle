function Modal({ isCorrect, turn, solution, setShowModal }) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You win !</h1>
          <p className="solution">{solution}</p>
          <p>You found the solution in {turn} guesses 😀</p>
          <button
            className="button"
            onClick={() => window.location.reload(false)}
          >
            Another round ?
          </button>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Nevermind</h1>
          <p className="solution">{solution}</p>
          <p>Better luck next time ! 😬</p>
          <button
            className="button"
            onClick={() => window.location.reload(false)}
          >
            Try again ?
          </button>
        </div>
      )}
    </div>
  );
}

export default Modal;
