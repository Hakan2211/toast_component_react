import React from "react";

import Button from "../Button";
import { ToastContext } from "../ToastProvider";
import ToastShelf from "../ToastShelf";
import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const { toasts, createToast } = React.useContext(ToastContext);

  function handleSubmit(e) {
    e.preventDefault();
    createToast(message, variant);
    setMessage("");
    setVariant(VARIANT_OPTIONS[0]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div className={styles.wrapper}>
          <header>
            <img alt="Cute toast mascot" src="/toast.png" />
            <h1>Toast Playground</h1>
          </header>

          <ToastShelf toasts={toasts} />

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
