import styles from "./InputBox.module.scss";

const InputBox = ({
  input,
  setInput,
  inputId,
  type,
  placeholder,
  obligatory,
  label,
  error,
  local,
}) => {
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleChecked = (event) => {
    setInput(!input);
  };

  return (
    <div
      className={[
        styles.Input,
        local === "form" && styles.Input__form,
        type === "checkbox" && styles.Input__checkbox,
      ].join(" ")}
    >
      <div className={styles.Input__title}>
        <label id={inputId}>
          {label} {obligatory && <span className={styles.Input__star}>*</span>}
        </label>
        {error && <p>{error}</p>}
      </div>

      {type !== "textarea" ? (
        <input
          id={inputId}
          className={styles.Input__entry}
          type={type ? type : "text"}
          placeholder={placeholder}
          value={input}
          checked={type === "checkbox" && input}
          onChange={type === "checkbox" ? handleChecked : handleChange}
        ></input>
      ) : (
        <textarea
          id={inputId}
          placeholder={placeholder}
          className={styles.Input__entry}
          value={input}
          onChange={handleChange}
          rows={"6"}
        ></textarea>
      )}
    </div>
  );
};

export default InputBox;
