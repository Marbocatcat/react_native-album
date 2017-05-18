import React, { Component } from 'react';
import { View, } from 'react-native';

import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {
  state = { Album: [] };


  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
      .then((responseJson) => this.setState({ Album: responseJson }))
      .catch((error) => console.log(error));
  }

  handleData = () =>
    this.state.Album.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );

  render() {
    return (
      <View>
        { this.handleData() }
      </View>
    );
  }
}
