import React from 'react'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const EditorForm = ({ content, handleSubmit, handleEditorState }) => {
  return (
    <div className="grid-x">
      <div className="cell">
        <form onSubmit={handleSubmit}>
          <Editor
            editorState={content}
            onEditorStateChange={handleEditorState}
          />
        </form>
      </div>
      {/* <div className="cell text-center">
        <button className="hollow button large" type="submit">
          SUBMIT
        </button>
      </div> */}
    </div>
  )
}

export default EditorForm
