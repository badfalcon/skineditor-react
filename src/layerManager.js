import React, {Component} from 'react';

class LayerManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layerList: [],
      currentLayer: 0,
      nextLayer: 0,
    };
  }

  addLayer = () => {
    const {layerList,currentLayer,nextLayer} = this.state;
    this.setState({
      //create layer
      layerList:[...layerList.slice(0, currentLayer),new Layer(nextLayer), ...layerList.slice(currentLayer)]
    })
  };

  removeLayer = (index) => {
    const {layerList, currentLayer} = this.state;
    if(index === undefined) index = currentLayer;
    this.setState({
      layerList: [...layerList.slice(0, index), ...layerList.slice(index + 1)]
    });
  };

  render() {
    const {layerList} = this.state;

    return (
        <div id="LayerManager">
          <span>LayerManager</span>
          <button type="button" onClick={this.addLayer}>+</button>
          <button type="button" onClick={this.removeLayer}>-</button>
          {layerList}
        </div>
    );
  }
}

class Layer extends Component{
  id;
  name;
  visible = true;
  dom;

  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      name: typeof props.name === 'undefined' ? "new layer" : props.name,
      visible: true,
    };
  }

  showLayer() {
    this.visible = true;
  }

  hideLayer() {
    this.visible = false;
  }

  toggleLayer() {
    this.visible = !this.visible;
  }

  isHidden() {
    return !this.visible
  }

  setLayerName(name) {
    this.name = name;
  }

  getLayerName() {
    return this.name;
  }

  render() {
    return(<canvas ref="canvas">

    </canvas>);
  }
}