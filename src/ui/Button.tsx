import { JSX } from 'solid-js';
import clsx from 'clsx';
import styles from './Button.module.scss';

type ButtonVariant = 'primary' | 'danger';

interface ButtonProps {
  variant?: ButtonVariant;
  icon?: 'plus' | 'trash';
  onClick?: () => void;
  children?: JSX.Element;
  class?: string;
}

export function Button(props: ButtonProps) {
  return (
    <button
      class={clsx(
        styles.button,
        props.variant && styles[`button--${props.variant}`],
        props.class
      )}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
