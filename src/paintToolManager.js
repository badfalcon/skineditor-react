import React, {Component} from 'react';

class PaintToolManager extends Component{
  constructor(props) {
    super(props);

  }

  render() {
    return(
        <div id="paintTool">
          <span>PaintToolManager</span>
          <button type="button">paint</button>
        </div>
    )
  }
}