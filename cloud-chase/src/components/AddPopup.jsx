import React from 'react'

function AddPopup(openModal) {
    return (
      <div>
        {openModal && (
          <div className="model">
            {/* Model content */}
            <h2>Model Title</h2>
            <p>Model Content</p>
          </div>
        )}
      </div>
    );
  };

export default AddPopup