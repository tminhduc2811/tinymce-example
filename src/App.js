
import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

class App extends React.Component {
  state = {
    content: null,
  }
  handleEditorChange = (e) => {
    const data = JSON.stringify(e.target.getContent());
    console.log(data)
  }

  render() {
    return (
      <Editor
        apiKey='83ip6b10skds6fav2qt1j6bp1dcubqwl8yr0lav5k3hjzy5y'
        initialValue="<p>Initial content</p>"
        init={{
          height: 500,
          menubar: true,
          plugins: [
            'advlist autolink lists link image',
            'charmap print preview anchor help',
            'searchreplace visualblocks code',
            'insertdatetime media table paste wordcount'
          ],
          image_dimensions: false,
          image_class_list: [
            { title: 'Responsive', value: 'img-fluid' },
            {title: 'None', value: null}
          ],
          toolbar:
            'undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help'
        }}
        onChange={this.handleEditorChange}
      />
    );
  }
}

export default App;