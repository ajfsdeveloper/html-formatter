import React, { Component } from 'react'
import draftToHtml from 'draftjs-to-html'
import { EditorState, convertToRaw } from 'draft-js'
import renderHtml from 'react-render-html'

import EditorForm from './EditorForm'

import $ from 'jquery'

class App extends Component {
  constructor() {
    super()

    this.state = {
      content: EditorState.createEmpty()
    }
  }

  componentDidMount() {
    $(document).foundation()
  }

  handleEditorState = editorState => {
    this.setState({
      content: editorState
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    /* const htmlContent = draftToHtml(
      convertToRaw(this.state.content.getCurrentContent())
    ) */
  }

  render() {
    const rawContent = draftToHtml(
      convertToRaw(this.state.content.getCurrentContent())
    )

    return (
      <div className="grid-container">
        <div className="grid-x grid-margin-x grid-padding-x">
          <div className="cell text-center">
            <h1>HTML Formatter!</h1>
          </div>
          <div className="cell">
            <div className="radius bordered shadow card">
              <div className="card-divider">Format Text Below</div>
              <div className="card-section">
                <EditorForm
                  handleEditorState={this.handleEditorState}
                  handleSubmit={this.handleSubmit}
                  content={this.state.content}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid-x grid-margin-x grid-padding-x">
          <div className="cell medium-6">
            <div className="radius bordered shadow card">
              <div className="card-divider">Formatted Content Below</div>
              <div className="card-section">{renderHtml(rawContent)}</div>
            </div>
          </div>
          <div className="cell medium-6">
            <div className="radius bordered shadow card">
              <div className="card-divider">Raw Content Below</div>
              <div className="card-section">{rawContent}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
