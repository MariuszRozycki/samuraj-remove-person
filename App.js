const Person = (props) => {
  return (
    <>
      <li>{props.name}</li><button onClick={props.delete}>Usun</button>
    </>
  )
}

class List extends React.Component {

  state = {
    people: [
      { id: 1, name: 'Mariusz' },
      { id: 2, name: 'Alena' },
      { id: 3, name: 'Zenon' },
      { id: 4, name: 'Staszek' }
    ]
  }

  handleDelete(id) {

    const people = [...this.state.people];
    const index = people.findIndex(person => person.id === id);
    people.splice(index, 1);

    this.setState({
      people
    })
  }

  render() {

    const people = this.state.people.map(person => <Person key={person.id} name={person.name} delete={this.handleDelete.bind(this, person.id)} />)

    return (
      <>
        <ul>{people}</ul>
      </>
    )
  }
}

ReactDOM.render(<List />, document.getElementById('root'));