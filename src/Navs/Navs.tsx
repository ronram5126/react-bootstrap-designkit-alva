import * as React from "react";
import CSSWrapper from "../loadcss/CSSWrapper";
import {
    Nav, NavItem
} from "react-bootstrap";
import {ReactEventHandler} from "react";

interface NavsProps {
    text: string;
    activeKey: number;
    bsStyle: string;
    items: string;
    itemsDisabled: string;
}

interface NavsState {
    activeKey: number;
}

export class Navs extends React.Component<NavsProps, NavsState> {
    constructor(props:NavsProps) {
        super(props);
        this.state = {
            activeKey: 1
        };
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(selectedKey: ReactEventHandler) {
        // @ts-ignore
        this.setState({ activeKey: selectedKey });
    }

    // Set default properties
    static defaultProps = {
        activeKey: 1,
        bsStyle: "pills",
        items: "NavItem 1 content, NavItem 2 content, NavItem 3 content",
        itemsDisabled: "false,false,true"
    };

    render() {
        const { bsStyle, items, itemsDisabled } = this.props;
        return (
            <CSSWrapper>
                <Nav
                    bsStyle={bsStyle}
                    activeKey={this.state.activeKey}
                    // @ts-ignore
                    onSelect={eventKey => {this.handleSelect(eventKey)}}
                >
                    {items &&
                    items.split(",").map((item, index) => {
                        const disabled = itemsDisabled.split(",")[index] === "true";
                        return (
                            <NavItem key={index} eventKey={index + 1} disabled={disabled}>
                                {item}
                            </NavItem>
                        );
                    })}
                </Nav>
            </CSSWrapper>
        );
    }
}

export default Navs;
