import React from 'react';
import { View, Text, Button, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';
import ProgressCircle from 'react-native-progress-circle';

const HomeScreen = ({ navigation, data }) => {

    const progress = data.progress;
    return (
        <View>
            <Text>Home Screen</Text>
            <Text>{progress.completion}</Text>
            <ProgressCircle
                percent={progress.completion * 100}
                radius={50}
                borderWidth={10}
                color="green"
                shadowColor="#999"
                bgColor="white"
            >
                <Text>{progress.duration + 'hours'}</Text>
            </ProgressCircle>
            <Button
                title="Go to Activity"
                onPress={() => navigation.navigate('Activity')}

            />
        </View>
    );
}


export default withNavigation(HomeScreen);