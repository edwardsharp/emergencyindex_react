import React, { Component } from 'react';
import MatButton, {ButtonProps} from '@material-ui/core/Button';

class Button extends Component<ButtonProps> {
  render() {
    return (
      <MatButton {...this.props}>
        {this.props.children}
      </MatButton>
    );
  }
}

export default Button;
