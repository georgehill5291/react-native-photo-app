import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import theme from '../../assets/themes'

const Avatars = ({ avatars }) => {
    return (
        <View>
            {avatars.map((item, index) => (
                <Image
                    key={index}
                    source={item.image}
                    style={[
                        styles.avatarStyle,
                        { zIndex: index, marginLeft: index * 16 },
                        index !== avatars.length - 1 && { position: 'absolute' },
                    ]}
                ></Image>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    avatarStyle: {
        resizeMode: 'cover',
        width: theme.imageHeight.xs,
        height: theme.imageHeight.xs,
        borderRadius: theme.imageHeight.xs / 2,
        borderWidth: theme.borderRadius.xs,
        borderColor: theme.colors.black,
    },
})

export default Avatars
