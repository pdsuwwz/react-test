import './style.scss'

export default class HealthCheck extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount = () => {
    document.title = "HealthCheck"
  }
  render() {
    return (
      <div styleName="wrap">
        <p styleName="hello">HealthCheck</p>
        <p>200</p>
      </div>
    )
  }
}
