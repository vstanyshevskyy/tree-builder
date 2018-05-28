import './index.css';
import React from 'react';
import Node from '../Node';

export default props => (
  <div>
    <div id="tree__label">Click on a node to collapse it</div>
    <ul className="tree" role="tree" aria-labelledby="tree__label">
      {props.tree.children.map((node, index) => (
        <Node
          level={1}
          index={index}
          siblingsCount={props.tree.children.length}
          title={node.title} nodes={node.children}
          isFocused
        />))}
    </ul>
  </div>
);
