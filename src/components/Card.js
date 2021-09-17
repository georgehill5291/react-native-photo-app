import React from 'react'
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import theme from './../../assets/themes/index'
import Avatars from './Avatars'

const Card = ({ item, navigation }) => {
    return (
        <ImageBackground source={item.background} style={styles.imageBackground}>
            <Pressable onPress={() => navigation.navigate('ShareAlbum', { album: item })}>
                <View style={styles.imageContentContainer}>
                    <View>
                        <Text style={styles.imageTitle}>{item.title}</Text>
                        <Text style={styles.imageSubtitle}>{`Create by ${item.user}`}</Text>
                    </View>

                    <View>
                        {/* Avatar */}
                        <Avatars avatars={item.avatars} />
                    </View>
                </View>
            </Pressable>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imageBackground: {
        resizeMode: 'cover',
        overflow: 'hidden',
        height: theme.imageHeight.s,
        marginTop: theme.spacing.m,
        marginHorizontal: theme.spacing.m,
        paddingHorizontal: theme.spacing.m,
        borderRadius: theme.borderRadius.m,
        justifyContent: 'center',
    },
    imageContentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    imageTitle: {
        ...theme.textVariants.h1,
        color: theme.colors.white,
    },
    imageSubtitle: {
        ...theme.textVariants.body2,
        color: theme.colors.white,
    },
})

export default Card
