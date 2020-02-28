import * as React from "react";
import "./Button.css";

interface IProps {
  /**
   * An array of 9 React elements to serve as the Tic Tac Toe game cells.
   */
  size: "regular" | "large";

  /**
   * Line style to use when dividing game cells.
   *
   * @default "solid"
   */
  children: React.ReactNode;
  onClick?: () => void;
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
