import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';
import SavedColours from './SavedColours';
import SavedColour from './SavedColour';
import colours from './colours';
import Picker from './Picker';
import Colour from './Colour';

class ColourPicker extends Component {
  state = {
    colour: '',
    savedColours: []
  };

  handleChange = ({ target }) => {
    this.setState({
      colour: target.value
    });
  };

  saveColour = e => {
    e.preventDefault();
    const { savedColours, colour } = this.state;

    const newSavedColours = [...savedColours, colour];
    this.setState({ savedColours: newSavedColours });
  };

  handlePick = colour => {
    const { savedColours } = this.state;

    const newSavedColours = [...savedColours, colour];
    this.setState({ savedColours: newSavedColours });
  };

  render() {
    const { colour, savedColours } = this.state;
    return (
      <>
        <p>Enter a Hex value or CSS colour here</p>
        <form onSubmit={this.saveColour}>
          <Input
            type="text"
            onChange={this.handleChange}
            value={colour}
            autoFocus
            placeholder="e.g. #000000 or 'red'"
          />
          <Button type="submit" onClick={this.saveColour} value="Save Colour!" />
        </form>
        <p>Or select a colour below to save:</p>
        <Picker>
          {colours.map(colour => (
            <Colour {...{ key: colour, colour, onClick: this.handlePick.bind(this, colour) }} />
          ))}
        </Picker>
        {!!savedColours.length && <p>Your saved colours (last five):</p>}
        <SavedColours>
          {savedColours.slice(-5).map((colour, index) => (
            <SavedColour {...{ key: `${colour}${index}`, colour }} />
          ))}
        </SavedColours>
      </>
    );
  }
}

export default ColourPicker;
