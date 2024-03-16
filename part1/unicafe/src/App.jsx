import { useState } from 'react'



const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Total = ({good, neutral, bad}) => {

  const total = good + neutral + bad;

  if  (total === 0){
    return (
      <div>
        No feedback given
      </div>
      )
  }

  return (
    <div>
      <Statistics text="good" value={good}/>
      <Statistics text="neutral" value={neutral}/>
      <Statistics text="bad" value={bad}/>
      <Statistics text="all" value={total}/>
      <Statistics text="average" value={good - bad / total}/>
      <Statistics text="positive" value={total / good}/>
    </div>
  )
}

const Statistics = ({text, value}) => {
    return (
      <p>{text} {value}</p>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  // const total = good + bad + neutral;
  // const average = good - bad / total;
  // const positive = total / good;

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button handleClick={handleGoodClick} text='Good'/>
        <Button handleClick={handleNeutralClick} text='Neutral'/>
        <Button handleClick={handleBadClick} text='Bad'/>
      </div>

      <h1>Statistics</h1>
      <Total good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App