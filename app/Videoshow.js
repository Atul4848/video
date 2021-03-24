import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import * as Imagepicker from 'react-native-image-picker';
import Video from 'react-native-video';

class Videoshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoURL: '',
    };
  }
  handlechoosephoto = () => {
    const options = {mediaType: 'video', noData: 'false'};
    Imagepicker.launchImageLibrary(options, Response => {
      this.setState({videoURL: Response.uri});
    });
  };

  render() {
    return (
      <View>
        <ScrollView>
          <View>
            <Button title="choose" onPress={this.handlechoosephoto} />
            <Video
              source={{
                uri: this.state.videoURL,
              }}
              style={styles.backgroundVideo}
              controls={true}
              fullscreen={false}
              ref={ref => {
                this.player = ref;
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'relative',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 300,
  },
});
export default Videoshow;
