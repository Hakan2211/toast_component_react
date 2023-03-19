import React from "react";

export default function useKey(key, callback) {
  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === key) {
        callback();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [key, callback]);
}
