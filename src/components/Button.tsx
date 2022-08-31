import React from 'react';
import {TouchableOpacity, TouchableOpacityProps, Text, StyleSheet} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button( {title, ...rest} : ButtonProps ) {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            {...rest}
        >
            <Text style={styles.buttonText}>
                {title}
            </Text>
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