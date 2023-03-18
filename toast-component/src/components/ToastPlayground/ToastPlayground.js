import React from "react";

import Button from "../Button";

import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      message: "jjj",
      variant: "notice",
    },
    {
      id: crypto.randomUUID(),
      message: "jjj",
      variant: "success",
    },
  ]);

  function handleSubmit(e) {
    e.preventDefault();
    setToasts([...toasts, { message, variant, id: crypto.randomUUID() }]);
    setMessage("");
    setVariant(VARIANT_OPTIONS[0]);
  }

  function deleteToast(id) {
    const nextToasts = toasts.filter((toast) => toast.id !== id);

    setToasts(nextToasts);
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div className={styles.wrapper}>
          <header>
            <img alt="Cute toast mascot" src="/toast.png" />
            <h1>Toast Playground</h1>
          </header>

          <ToastShelf toasts={toasts} deleteToast={deleteToast} />

          <div className={styles.controlsWrapper}>
            <div className={styles.row}>
              <label
                htmlFor="message"
                className={styles.label}
                style={{ alignSelf: "baseline" }}
              >
                Message
              </label>
              <div className={styles.inputWrapper}>
                <textarea
                  id="message"
                  className={styles.messageInput}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.label}>Variant</div>
              <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
                {VARIANT_OPTIONS.map((option, index) => {
                  return (
                    <label key={index} htmlFor={`variant-${option}`}>
                      <input
                        id={`variant-${option}`}
                        type="radio"
                        name="variant-toaster"
                        checked={option === variant}
                        value={option}
                        onChange={(e) => setVariant(e.target.value)}
                      />
                      {option}
                    </label>
                  );
                })}

                {/* TODO Other Variant radio buttons here */}
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.label} />
              <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
                <Button>Pop Toast!</Button>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  );
}

export default ToastPlayground;
