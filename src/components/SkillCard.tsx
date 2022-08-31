import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    TouchableOpacityProps,
} from 'react-native';

interface SkillCardProp extends TouchableOpacityProps{
    skill: string;
}

export function SkillCard( { skill, ...rest }: SkillCardProp ) {
    return (
        <TouchableOpacity style={[styles.buttonSkill, {marginVertical: 10}]}>
            <Text style={styles.textSkill} {...rest}>
                {skill}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#1f1e25',
        padding: 20,
        borderRadius: 20,
        alignItems: 'center'
    },
    textSkill: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
});