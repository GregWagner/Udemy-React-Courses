class Hello extends React.Component {
  static defaultProps = {
    to: 'Stranger',
    from: 'Anonymous',
    bangs: 1,
  };
  render() {
    // console.log(this.props);
    const props = this.props;
    const bangs = '!'.repeat(props.bangs);
    return (
      <div>
        <h1>
          Hi {props.to} from {props.from}
          {bangs}
        </h1>
      </div>
    );
  }
}
