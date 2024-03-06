import React from 'react';
import logo from './logo.svg';
import './App.css';
import collegeBasketballTeams from './CollegeBasketballTeams.json';

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Welcome() {
  return <h1>Welcome To The College Basketball Info Page</h1>;
}

class TeamCard extends React.Component<TeamProps> {
  render() {
    const { school, name, city, state } = this.props;

    return (
      <div className="team-card">
        <h2>{school}</h2>
        <h3>Team Name: {name}</h3>
        <h3>
          Location: {city}, {state}
        </h3>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {collegeBasketballTeams.teams.map((team, index) => (
        <TeamCard
          key={index}
          school={team.school}
          name={team.name}
          city={team.city}
          state={team.state}
        />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
