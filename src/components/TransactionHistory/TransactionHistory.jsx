import PropTypes from 'prop-types';

import css from './Transactions.module.css'

export default function TransactionHistory({items}) {
  return (
    <table className={css.table}>
        <thead>
            <tr>
                <th className={css.subtitle}>Type</th>
                <th className={css.subtitle}>Amount</th>
                <th className={css.subtitle}>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(it => (
                    <tr className={css.string} key={it.id}>
                        <td className={css.cell}>{it.type}</td>
                        <td className={css.cell}>{it.amount}</td>
                        <td className={css.cell}>{it.currency}</td>
                    </tr>
            ))}
        </tbody>
    </table>
  )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }))
}




