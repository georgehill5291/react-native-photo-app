import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import theme from '../../../assets/themes'

const BottomSheetContain = ({ handleClose }) => {
    return (
        <View style={styles.contentWrapper}>
            <TouchableOpacity
                onPress={() => {
                    alert('create')
                }}
                style={styles.buttonLarge}
            >
                <Text style={styles.buttonTitle}>Create new album</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleClose()} style={styles.buttotSmall}>
                <Text style={styles.buttonTitle}>Cancel</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    contentWrapper: {
        backgroundColor: theme.colors.lightGray,
        padding: theme.spacing.m,
        height: 250,
    },
    buttonLarge: {
        marginTop: theme.spacing.sm,
        marginHorizontal: theme.spacing.m,
        paddingVertical: theme.spacing.l,
        backgroundColor: theme.colors.white,
        borderRadius: theme.borderRadius.m,
        alignItems: 'center',
        shadowColor: theme.colors.black,
        shadowOffset: {
            height: 2,
            width: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    buttotSmall: {
        marginTop: theme.spacing.m,
        marginHorizontal: theme.spacing.m,
        paddingVertical: theme.spacing.m,
        backgroundColor: theme.colors.white,
        borderRadius: theme.borderRadius.m,
        alignItems: 'center',
        shadowColor: theme.colors.black,
        shadowOffset: {
            height: 2,
            width: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    buttonTitle: {
        ...theme.textVariants.h2,
    },
})

export default BottomSheetContain
