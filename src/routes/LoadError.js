import React from "react";

export default function LoadError() {
  return (
    <div className="text-center">
      <div>
        <h2 className="text-danger">Load Error</h2>
      </div>
      <button
        type="button"
        className="btn btn-info btn-lg"
        onClick={() => window.location.reload(false)}
      >
        Click here to reload when server is up.
      </button>
    </div>
  );
}
