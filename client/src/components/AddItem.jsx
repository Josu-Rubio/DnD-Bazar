import { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Alert,
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
import AppNavbar from './AppNavbar';

class AddItem extends Component {
  state = {
    title: '',
    description: '',
    category: '',
    price: '',
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async (e) => {
    // e.preventDefault();

    const newItem = {
      title: this.state.title,
      description: this.state.description,
      category: this.state.category,
      price: this.state.price,
    };

    await this.props.addItem(newItem);

    alert('Item added successfully');
  };

  render() {
    return (
      <div>
        <AppNavbar />
        <Container>
          <h2 className='text-center mb-3'>Add new Item</h2>
          {this.props.isAuthenticated ? (
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='title'>Title</Label>
                <Input
                  type='text'
                  name='title'
                  id='title'
                  placeholder='Title of the item'
                  onChange={this.onChange}
                />
                <br />
                <Label for='description'>Description</Label>
                <Input
                  type='select'
                  name='select'
                  id='exampleSelect'
                  placeholder='Description of the Item'
                  onChange={this.onChange}
                >
                  <option>Armadura</option>
                  <option>Arma</option>
                  <option>Equipo Aventurero</option>
                  <option>Herramienta</option>
                  <option>Montura</option>
                  <option>Arreo</option>
                  <option>Vehículo Acuático</option>
                  <option>Mercancía</option>
                  <option>Alimentación</option>
                  <option>Servicio</option>
                  <option>Baratija</option>
                </Input>
                <br />
                <Label for='category'>Category</Label>
                <Input
                  type='text'
                  name='category'
                  id='category'
                  placeholder='Category of the Item'
                  onChange={this.onChange}
                />
                <br />
                <Label for='price'>Price</Label>
                <Input
                  type='number'
                  name='price'
                  id='price'
                  placeholder='Price of the Item'
                  onChange={this.onChange}
                />

                <Button color='dark' style={{ marginTop: '2rem' }} block>
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          ) : (
            <Alert className='text-center' color='danger'>
              Login to add Items!
            </Alert>
          )}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { addItem })(AddItem);
