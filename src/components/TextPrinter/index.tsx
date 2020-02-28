import * as React from "react";
import "./TextPrinter.css";

interface IProps {
    /**
     * Size of the Text
     */
    size: "big" | "small";

    /**
     * is this component cool
     */
    cool?: boolean;
    /**
     * Children of the Text
     *
     * @default "bull"
     */
    children: React.ReactNode;
}

export class TextPrinter extends React.PureComponent<IProps> {
    render() {
        const { size, children } = this.props;
        return (
            <p
                className={size}
            >
                {children}
            </p>
        );
    }

    static defaultProps = {
        size: "big"
    };
}
