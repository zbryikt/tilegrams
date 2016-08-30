import React from 'react'
import ReactDOM from 'react-dom'

import {createElement} from './utils'
import DatasetSelector from './components/DatasetSelector'
import HexMetrics from './components/HexMetrics'

class Ui {
  constructor() {
    this._init()
  }

  setGeos(geos) {
    this._geos = geos
  }

  setAddTileCallback(callback) {
    this._addTileCallback = callback
  }

  setDatasetLabels(datasetLabels) {
    this._datasetLabels = datasetLabels
  }

  setSelectedDataset(dataset) {
    this._selectedDataset = dataset
  }

  setDatasetSelectedCallback(callback) {
    this._datasetSelectedCallback = callback
  }

  setCustomDatasetCallback(callback) {
    this._customDatasetCallback = callback
  }

  _init() {
    this._container = createElement({id: 'ui'})
  }

  render(tiles, originalTilesLength) {
    ReactDOM.render(
      <div>
        <DatasetSelector
          labels={this._datasetLabels}
          onDatasetSelected={index => this._datasetSelectedCallback(index)}
          onCustomDataset={csv => this._customDatasetCallback(csv)}
          />
        <hr />
        <HexMetrics
          dataset={this._selectedDataset}
          geos={this._geos}
          tiles={tiles}
          originalTilesLength={originalTilesLength}
          onAddTileMouseDown={this._addTileCallback}
          />
      </div>,
      this._container
    )
  }
}

export default new Ui()