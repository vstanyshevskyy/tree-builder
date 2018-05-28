import React from 'react';
import './index.css';
import InputForm from '../InputForm';
import DefaultRawTree from './defaultTree';
import Tree from '../Tree';

const STORAGE_TREE_KEY = 'rawTree';

const defaultRawTree = typeof window !== 'undefined'
  && window.localStorage
  && localStorage.getItem(STORAGE_TREE_KEY)
  || DefaultRawTree;

class App extends React.Component {
  onSettingsChange({ rawTree }) {
    this.setState({
		  tree: this.parseTree(rawTree),
      rawTree
    });
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(STORAGE_TREE_KEY, rawTree);
    }
  }
  parseTree(rawTree) {
    const root = { title: null, isRoot: true, children: [] };
    const rows = rawTree.split('\n');
    rows.forEach(row => {
      const level = (row.length - row.trimLeft().length) / 2;
      let parent = root;
      for (let i = 0; i < level; i++) {
        parent = parent.children[parent.children.length - 1];
      }
      parent.children.push({
        title: row.trim(),
        isRoot: false,
        children: []
      });
    });
    return root;
  }
  constructor() {
    super();
    this.state = {
      tree: this.parseTree(defaultRawTree),
      rawTree: defaultRawTree
    };
    this.onSettingsChange = this.onSettingsChange.bind(this);
  }
  render() {
    return (
      <div className="app__wrapper">
        <div className="settings">
          <h2>Settings</h2>
          <InputForm
            onSettingsChange={this.onSettingsChange}
            rawTree={this.state.rawTree}
          />
        </div>
        <div className="result">
          <h2>Result</h2>
          <Tree tree={this.state.tree} />
        </div>
      </div>);
  }
}

export default App;
