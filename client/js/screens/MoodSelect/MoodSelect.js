import React from 'react';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { theme, Heading, ScreenBkgCont, PrimaryBtn, InputSkipText } from '../../globalStyles';
import styled from 'styled-components';
import MoodSlider from '../../components/MoodSlider/MoodSlider';

const SubHeading = styled.Text`
    font-size:${theme.bodyFontSize};
    font-family: ${theme.headlineFont};
    text-align: center;
`
const NextBtnCont = styled.View`
    margin: 50px auto;
`

const MoodSelectScreen = ({ navigation }) => {

    return (
        <ScreenBkgCont>
            <Heading>Amazing!</Heading>
            <SubHeading>How are you feeling?</SubHeading>
            <MoodSlider />
            <NextBtnCont>
                <TouchableOpacity onPress={() => navigation.push('TextInput')}>
                    <PrimaryBtn>Next</PrimaryBtn>
                </TouchableOpacity>
            </NextBtnCont>
            <TouchableOpacity onPress={() => navigation.push('TextInput')}>
                <InputSkipText>Skip</InputSkipText>
            </TouchableOpacity>
        </ScreenBkgCont>
    );
}

export default withNavigation(MoodSelectScreen);