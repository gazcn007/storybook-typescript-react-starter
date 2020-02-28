import * as React from "react";
import "./Button.css";

interface IProps {
  /**
   * Size of the Button
   */
  size: "regular" | "large";

  /**
   * Children of the button
   *
   * @default "bull"
   */
  children: React.ReactNode;
  /**
   * Action when the button is onClick
   *
   * @default "action"
   */
  onClick?: () => void;
  /**
   * Whether button is active
   *
   * @default "disable"
   */
  disabled?: boolean;
}

export class Button extends React.PureComponent<IProps> {
  componentDidMount(){
    document.addEventListener("keydown", event => {
      event.stopPropagation();
      console.log('key pressed', event);
    });
  }
  render() {
    const { size, children, onClick, ...rest } = this.props;
    return (
      <button
          onClick={onClick}
          className={'pat-button'}
          {...rest}
      >
        {children}
      </button>
    );
  }

  static defaultProps = {
    size: "regular"
  };
}
