import { Component } from 'react';
import './employers-add-form.css';

class EmployersAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value, // TODO: понимаешь же когда надо брать в квадратные скобки ключ объекта, а когда нет?
    });
  };

  onSubmitLox = (e) => {
    e.preventDefault();
    if (this.state.name.length < 3 || !this.state.salary) return; // TODO: можешь эту проверку добвить на disabled кнопки, но ты такое делала, просто обычно это так происходит)
    this.props.onAdd(this.state.name, this.state.salary); // TODO: чему здесь и в алалоговых классах равен this, что ты так широко можешь через него все методы доставать
    this.setState({
      name: '',
      salary: '',
    });
  };

  render() {
    const { name, salary } = this.state;

    return (
      <div className='app-add-form'>
        <h3>Добавьте нового сотрудника</h3>
        <form className='add-form d-flex' onSubmit={this.onSubmitLox}>
          <input
            type='text'
            className='form-control new-post-label'
            placeholder='Как его зовут?'
            name='name'
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type='number'
            className='form-control new-post-label'
            placeholder='З/П в $?'
            name='salary'
            value={salary}
            onChange={this.onValueChange}
          />

          <button type='submit' className='btn btn-outline-light'>
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployersAddForm;
