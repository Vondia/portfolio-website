import { cx } from "linaria";
import React, {
  FC,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import * as styles from "./Input.styles";
import { InputStatusProp } from "./types";

export type InputProps = InputStatusProp &
  InputHTMLAttributes<HTMLInputElement> & {
    label?: React.ReactNode;
    suffix?: React.ReactElement;
  };

export const Input: FC<InputProps> = ({
  onChange,
  onFocus,
  onBlur,
  status = "idle",
  className,
  label,
  value,
  name,
  suffix,
  ...rest
}) => {
  const suffixRef = useRef<HTMLDivElement>(null);
  const [paddingRight, setPaddingRight] = useState(16);
  const [isFilled, setIsFilled] = useState(() => {
    if (typeof value === "string") {
      return value.length > 0;
    } else if (typeof value === "number") {
      return true;
    } else {
      return false;
    }
  });

  useEffect(() => {
    if (!value || (typeof value === "string" && value.length === 0)) {
      setIsFilled(false);
    } else {
      setIsFilled(true);
    }
  }, [value]);

  useEffect(() => {
    if (suffixRef && suffixRef.current) {
      setPaddingRight(suffixRef.current.clientWidth + 24);
    }
  }, []);

  const [isFocused, setIsFocused] = useState(false);
  const id = rest.id || name;

  return (
    <div className={styles.inputContainer}>
      <input
        className={cx(styles.inputStyles, styles.baseInput, className)}
        onChange={handleChange}
        data-status={status}
        data-filled={isFilled || isFocused ? "" : undefined}
        name={name}
        id={id}
        value={value}
        disabled={status === "disabled"}
        onFocus={handleFocus}
        onBlur={handleBlur}
        data-has-suffix-only={!label && suffix ? "" : undefined}
        style={{ paddingRight }}
        {...rest}
      />
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      {suffix && (
        <div className={styles.suffix} ref={suffixRef}>
          {suffix}
        </div>
      )}
    </div>
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (typeof e.target.value === "string") {
      setIsFilled(e.target.value.length > 0);
      if (e.target?.type === "email") {
        e.target.value = e.target.value.toLowerCase();
      }
    }
    onChange && onChange(e);
  }

  function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
    setIsFocused(true);
    onFocus && onFocus(e);
  }
  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    setIsFocused(false);
    onBlur && onBlur(e);
  }
};
