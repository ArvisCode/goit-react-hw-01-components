import PropTypes from 'prop-types';
import css from './statistics.module.css';
import stats from '../../data/statData.json';


function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default function Statistics(statData) {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>

      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={css.item}
              key={id}
              style={{ backgroundColor: randomHexColor() }}
            >
              <span className={css.label1}>{label}</span>
              <span className={css.percentage1}>{percentage} %</span>
            </li>
          );
         
        })}
      </ul>
    </section>
  );
}

Statistics.prototype = {
  // title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};