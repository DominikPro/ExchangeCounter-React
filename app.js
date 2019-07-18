const Cash = (props) => {
  const value = (props.cash / props.ratio).toFixed(2)
  return (
    < div >{ props.title } <br /> { props.cash <= 0 ? "-----" : value } { props.shortName } </div>
  )
}

class ExchangeCounter extends React.Component {

  state = {
    amount: "",
  }

  currencies = [
    {
      id: 1,
      name: 'dolar',
      ratio: 3.6,
      title: "Warość w dolarach",
      shortName: "USA"
    },
    {
      id: 2,
      name: 'euro',
      ratio: 4.1,
      title: "Warość w euro",
      shortName: "EUR"
    },
    {
      id: 3,
      name: 'pound',
      ratio: 4.55,
      title: "Warość w funtach",
      shortName: "GBP"
    },
    {
      id: 4,
      name: 'juan',
      ratio: 0.03517,
      title: "Warość w jenach",
      shortName: "JPY"
    },

  ]

  handleChange = (e) => {
    this.setState({
      amount: e.target.value
    })
  }

  render() {
    const amount = this.state.amount;
    
    const calculators = this.currencies.map(curenncy => (
      <Cash
        key={ curenncy.id }
        ratio={ curenncy.ratio }
        title={ curenncy.title }
        cash={ amount }
        shortName={ curenncy.shortName }
      />
    ))

    return (
      <div className="app">
        <label>
          <input
            type="number"
            value={ this.state.amount }
            onChange={ this.handleChange }
          />
        </label>
        { calculators }
      </div>
    )

  }
}
ReactDOM.render(<ExchangeCounter />, document.getElementById('root'))
