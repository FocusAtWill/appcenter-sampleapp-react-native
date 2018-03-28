import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { BaseScreen } from './baseScreen';
import * as images from '../images';

export class WelcomeScreen extends React.Component {
    render() {
        return (
            <BaseScreen options={
                {
                    topContainer: {
                        height: 150,
                        backgroundColor: "#CB2E62",
                        imageSource: images.aclogo
                    },
                    bottomContainer: {
                        backgroundColor: "#252525",
                        description: "Visual Studio App Center is mission control for apps. It brings together multiple services, commonly used for mobile developers, into a single, integrated product.\n\n\nSwipe right to learn about our services"
                    }
                }
            }>
            </BaseScreen>
        );
    }
}

const styles = StyleSheet.create({

});