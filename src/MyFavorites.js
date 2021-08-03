import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyFavorites.css';
import { withAuth0 } from '@auth0/auth0-react';
import Form from './component/Form';
import Card from 'react-bootstrap/Card'
class MyFavorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favData: [],
      showForm: false,
      title: '',
      imageUrl: '',
      index: 0
    }
  }

  componentDidMount = async () => {
    const email = 'wijdankhaled178@gmail.com';
    const {user}=this.props.auth0;
    const url = `${process.env.PORT}/userdata?email${email}`;
    const data = await axios.get(url);
    this.setState({
      favData: data.colorData
    });
  }

  deleteColor = async (index) => {
    const email = '';
    const url = `${process.env.PORT}/delete/${index}?email=${email}`;
    const data = await axios.delete(url);
    this.setState({
      favorite: data.data,
    });

  }

  showFunction = async (index) => {
    await this.setState({
      index: index,
      title: this.this.state.favorite[index],
      imageUrl: this.state.favorite[index]
    });
  }

  updatFunction = async (e) => {
    e.preventDefult();
    const index=this.state.index;
    const {user}=this.props.auth0;
    const email = 'wijdankhaled178@gmail.com'

    const reqBody = {
      title: e.target.title.value,
      imageUrl: e.target.imageUrl.value,
    }
    const url=`${process.env.PORT}/update/${index}?email=${email}`;
    const data =await axios.put(url,reqBody);
    this.setState({favorite:data.data
    });
  }
  render() {
    return (
      <>
        <h1>My Favorites</h1>
        <p>
          This is a collection of my favorites
        </p>
this.this.state.favorite.map((el,idex)=>{
  return(
<Card key={idex} style={{ width: '18rem' }}>

          <Card.Img variant="top" src={el.imageUrl} />
          <Card.Body>
            <Card.Title>{el.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button onClick={()=>this.deleteColor(idex)} variant="primary">delete</Button>
            <Button onClick={()=>this.updatFunction(idex)} variant="primary">update</Button>
          </Card.Body>
        </Card>
  )
})
{
  this.showFunction && 
  <Form
  title={this.state.title}
  imageUrl={this.state.imageUrl}
  updatFunction={this.updatFunction}
  />

}
        
      </>
    )
  }
}

export default withAuth0(MyFavorites);

