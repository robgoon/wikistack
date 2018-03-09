const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(
  html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">

    <label for="name" class="col-sm-2 control-label">Author Name:</label>
    <div>
      <input name="name" type="text">
    </div>

    <label for="email" class="col-sm-2 control-label">Author Email:</label>
    <div>
      <input name="email" type="text">
    </div>

    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <label for="content" class="col-sm-2 control-label">Content:</label>
    <div>
      <textarea name='content'></textarea>
    </div>

    <label for="status" class="col-sm-2 control-label">Status:</label>
    <div>
      <select name='status'>
        <option value='open'>Open</option>
        <option value='closed'>Closed</option>
      </select>
    </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>

  </form>
`);
