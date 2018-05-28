import './index.css';
import PropTypes from 'prop-types';
import React from 'react';

const KEY_CODES = {
  SPACE: 32,
  ENTER: 13,
  L_ARR: 37,
  R_ARR: 39
};

class Node extends React.Component {
  getClassName() {
    const baseClassName = 'tree__item';
    const classNames = [baseClassName];
    if (this.hasNodes()) {
      classNames.push(`${baseClassName}--expandable`);
      if (this.state.expanded) {
        classNames.push(`${baseClassName}--expanded`);
      }
    }
    return classNames.join(' ');
  }
  toggleTree(e) {
    e.stopPropagation();
    this.setState({ expanded: !this.state.expanded });
  }
  handleKeyboard(e) {
    switch (e.which) {
    case KEY_CODES.SPACE:
    case KEY_CODES.ENTER:
    case KEY_CODES.L_ARR:
    case KEY_CODES.R_ARR:
      this.toggleTree(e);
      break;
    }
  }
  hasNodes() {
    return this.props.nodes && this.props.nodes.length > 0;
  }
  getAriaAttributes() {
    const attributes = {
      role: 'treeitem',
      ariaSetsize: this.props.siblingsCount,
      ariaLevel: this.props.level,
      posInset: this.props.index + 1
    };
    if (this.hasNodes()) {
      return Object.assign({}, attributes, {
        ariaExpanded: this.state.expanded,
        tabIndex: 0
      });
    }
    return attributes;
  }
  constructor(props) {
    super(props);
    this.toggleTree = this.toggleTree.bind(this);
    this.handleKeyboard = this.handleKeyboard.bind(this);
    this.state = { expanded: true, isFocused: false };
  }
  render() {
    return  (
      <li
        className={this.getClassName()}
        onClick={this.toggleTree}
        onKeyDown={this.handleKeyboard}
        {...this.getAriaAttributes()}
      >
        {this.props.title}
        {this.hasNodes() ?
          <ul className="tree" role="group">
            { this.props.nodes.map((node, index) => (
              <Node
                index={index}
                level={this.props.level + 1}
                siblingsCount={this.props.nodes.length}
                title={node.title}
                nodes={node.children}
              />)) }
          </ul>
          : null }
      </li>);
  }
}

Node.PropTypes = {
  index: PropTypes.number,
  level: PropTypes.number,
  siblingsCount: PropTypes.number,
  title: PropTypes.string,
  nodes: PropTypes.array
};

export default Node;
