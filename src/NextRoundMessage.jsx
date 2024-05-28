/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';

export default function NextRoundMessage({ setNextRoundDisplayed, round }) {
  const handleClose = () => {
    setNextRoundDisplayed(false);
  };

  return (
    <>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <dialog open className="rounded-lg shadow-lg p-6 max-w-lg w-full bg-white">
            <h2 className="text-xl font-bold mb-4">
              Round
              {' '}
              {round}
              {' '}
              Completed!
            </h2>
            <p className="mb-6">
              Another set of cards are being loaded in. See how many points you can get!
            </p>
            <div className="flex justify-center">
              <form method="dialog" onSubmit={handleClose}>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Close
                </button>
              </form>
            </div>
          </dialog>
        </div>
      )}
    </>
  );
}
