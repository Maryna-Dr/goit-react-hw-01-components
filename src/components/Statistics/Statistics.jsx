import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import getRandomHexColor from './renderColor';

export default function Statistics({title, stats}) {
  return (
    <section className={css.container}>
        {title && (
            <h2 className={css.title}>{title}</h2>
        )}
  
        <ul className={css.list}>
            {stats.map(it => (<li style={{backgroundColor: getRandomHexColor()}} className={css.item} key={it.id}>
            <span className={css.label}>{it.label}</span>
            <span className={css.percentage}>{it.percentage}%</span>
            </li>))}
        </ul>
        </section>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }))
}





