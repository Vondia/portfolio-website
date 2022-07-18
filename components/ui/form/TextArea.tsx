import { cx } from "linaria";
import React, { FC, TextareaHTMLAttributes, useEffect, useState } from "react";
import { baseInput } from "./Input.styles";
import * as styles from "./TextArea.styles";
import { InputStatusProp } from "./types";

export type TextAreaProps = InputStatusProp &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label: string;
  };

export const TextArea: FC<TextAreaProps> = ({
  onChange,
  onFocus,
  onBlur,
  status = "idle",
  className,
  label,
  value,
  name,
  ...rest
}) => {
  const [isFilled, setIsFilled] = useState(() => {
    if (typeof value === "string") {
      return value.length > 0;
    } else if (typeof value === "number") {
      return true;
    } else {
      return false;
    }
  });
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (typeof value === "string" && value.length === 0) {
      setIsFilled(false);
    }
  }, [value]);
  const id = rest.id || name;
  return (
    <div className={styles.textAreaContainer}>
      <textarea
        className={cx(styles.textAreaStyles, baseInput, className)}
        onChange={handleChange}
        data-status={status}
        data-filled={isFilled || isFocused ? "" : undefined}
        name={name}
        id={id}
        value={value}
        disabled={status === "disabled"}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
    </div>
  );

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    if (typeof e.target.value === "string") {
      setIsFilled(e.target.value.length > 0);
    }
    onChange && onChange(e);
  }

  function handleFocus(e: React.FocusEvent<HTMLTextAreaElement>) {
    setIsFocused(true);
    onFocus && onFocus(e);
  }
  function handleBlur(e: React.FocusEvent<HTMLTextAreaElement>) {
    setIsFocused(false);
    onBlur && onBlur(e);
  }
};
