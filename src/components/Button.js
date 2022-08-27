import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export function Button( {onPressAddSkill} ) {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={onPressAddSkill}
        >
            <Text styles={styles.buttonText}>Add</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#008B8B',
        fontSize: 18,
        padding: 15,
        marginTop: 15,
        borderRadius: 7,
        alignItems: 'center'
      },
      buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
      }
});