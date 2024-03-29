import StatisticLine from './StatisticLine';

const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <div>No feedback given.</div>;
  }

  let total = good + neutral + bad;
  let average = (good - bad) / total;
  let positive = (good / total) * 100;

  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={total} />
          <StatisticLine text="average" value={average.toFixed(2)} />
          <StatisticLine
            text="positive"
            value={positive.toFixed(2)}
            percentage
          />
        </tbody>
      </table>
    </div>
  );
};
export default Statistics;
