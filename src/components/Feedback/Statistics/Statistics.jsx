import PropTypes from 'prop-types';
import { StatisticsList } from "./Statistics.styled";

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
  <div className="statistics">
    <StatisticsList>
      <li className='statistics__item'>Good: {good}</li>
      <li className='statistics__item'>Neutral: {neutral}</li>
      <li className='statistics__item'>Bad: {bad}</li>
      <li className='statistics__item'>Total: {total}</li>
      <li className='statistics__item'>Positive feedback: {positivePercentage}%</li>
    </StatisticsList>
  </div>
)

export default Statistics

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}