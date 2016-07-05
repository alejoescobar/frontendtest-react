class Item extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {item: ''}
  };

  render () {
    return (
      <div>
        <h2> Rails React starter </h2>
        <div> {this.state.item}</div>
      </div>
    )
  }

  componentDidMount() {
    $.getJson('/api', (response) => { this.setState({ item: response.some }) });
  }

}
