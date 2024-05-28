import React, { useState, useEffect } from 'react';

export default function GreetingMessage() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (!isOpen) {
      // Optionally add additional cleanup or closing logic here
      console.log('Modal is closed!');
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <dialog open className="rounded-lg shadow-lg p-6 max-w-lg w-full bg-white">
            <h2 className="text-xl font-bold mb-4">Welcome to the Game!</h2>
            <p className="mb-6">
              You are given a number of cards, and you have to click all of them without
              re-clicking the same card twice. Every time you click one you haven't clicked,
              you get a point, but if you re-click the same card, you lose a point.
            </p>
            <div className="flex justify-center">
              <form method="dialog" onSubmit={handleClose}>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Got it!
                </button>
              </form>
            </div>
          </dialog>
        </div>
      )}
    </>
  );
}
