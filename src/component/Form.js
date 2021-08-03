import React, { Component } from 'react'

export class Form extends Component {
    render() {
        return (
            <div>
                {/* <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail" onsubmit={(e)=>this.props.updateFunction(e)}>
    <Form.Label>title</Form.Label>
    <Form.Control type="type"  />
    <Form.Text className="text-muted" placeholder="title" value={this.props.title}>
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form> */}
<form onsubmit={(e)=>this.props.updatFunction(e)}>
<label>Title</label>
<input type="type" name="title" value={this.props.title}/>
<label>img</label>
<input type="type" name="title" value={this.props.imageUrl}/>
<input type="submit"/>
</form>
            </div>
        )
    }
}

export default Form
