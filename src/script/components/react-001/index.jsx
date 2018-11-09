import './style.scss'

export default class Hello extends React.Component {
  constructor(props){
    super(props)
  }
  componentWillMount = () => {
    document.title = "Hello World"
  }
  render() {
    return (
      <div styleName="wrap">
        <p styleName="hello">Hello React !</p>
      </div>
    )
  }
}
