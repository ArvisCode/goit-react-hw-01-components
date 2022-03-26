import PropTypes from 'prop-types';
import css from './section.module.css';

export default function Section({ title, children }) {
  return (
    <section>
      <div className={css.container}>
        <h2 className={css.title}>{title}</h2>
        {children}
      </div>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
