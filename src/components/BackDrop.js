import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('backdrop');

export default class BackDrop extends Component {
  constructor(props) {
    super(props);

    this.el = document.createElement('div');
  }

  componentDidMount = () => {
    modalRoot.appendChild(this.el);
  };

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return createPortal(this.props.children, this.el);
  }
}
