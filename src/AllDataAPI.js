import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyFavorites.css';

class AllDataAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorData: []
        }
    }


    componentDidMount = async () => {
        const url = `${process.env.REACT_APP}/apidata`;
        const data = await axios.get(url);
        this.setState({
            colorData: data.data
        });
    }


    addToFav = async (el) => {
        const email = 'wijdankhaled178@gmail.com'
        const {user}=this.props.auth0;
        const reqBody = {
            title: el.title,
            imageUrl: el.imageUrl

        }
        const url = `${process.env.PORT}/addtofav?email=${email}`;
        await axios.post(url, reqBody);
    }


    render() {
        return (
            <>
                <div>
                    <h1>All Data from the API</h1>
                    <h3>Select your favorites :)</h3>
                </div>
                this.state.colorData.map((el,idex){
                    return(
                
                    )
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={el.imageUrl} />
                        <Card.Body>
                            <Card.Title> {el.title}</Card.Title>

                            <Button variant="primary" onClick={()=>this.addToFav(idex)}>addToFavoret</Button>
                        </Card.Body>
                    </Card>
                })


            </>
        )
    }
}

export default withAuth0(AllDataAPI);
