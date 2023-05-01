

import propTypes from 'prop-types';
import styles from "components/TransactionHistory/TransactionHistory.module.css"


const TransactionHistory = ({ items }) =>{
  return (<div className={styles.container}><table className={styles.transaction}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    
    {items.map(({ id, type, amount, currency })=> (
        <tbody >
        <tr key={id}>
        <td className={styles.column} >{type}</td>
        <td className={styles.column}>{amount}</td>
        <td className={styles.column}>{currency}</td>
      </tr>
      </tbody>
    ))

    }
  </table>
  </div>

    )
}


TransactionHistory.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      type: propTypes.string,
      amount: propTypes.string,
      currency: propTypes.string,
    }).isRequired
  ),
};

export default TransactionHistory;