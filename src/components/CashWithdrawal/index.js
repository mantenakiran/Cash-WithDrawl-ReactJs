import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    return (
      <div className="bg-container">
        <div className="inner-container">
          <div className="name-container">
            <p className="s-char">S</p>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="money-container">
            <p className="your-balance">Your Balance</p>
            <div>
              <p className="balance">{balance}</p>
              <p className="rupees-text">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="your-balance">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-list">
            {denominationsList.map(eachItem => (
              <DenominationItem
                key={eachItem.id}
                denominationDetails={eachItem}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
