import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import theme from '../../../assets/themes'

const ShareAlbumTitleCard = ({ album }) => {
    return (
        <ImageBackground source={album.background} style={styles.imageBackground}>
            <View style={styles.imageContent}>
                <View>
                    <Text style={styles.imageTitle}>{album.title}</Text>
                    <Text style={styles.imageSubtitle}>{`Create by ${album.user}`}</Text>
                </View>
                <View>
                    <Text style={styles.imageNumber}>102 photos</Text>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imageBackground: {
        resizeMode: 'cover',
        overflow: 'hidden',
        height: theme.imageHeight.l,
        marginTop: theme.spacing.m,
        marginHorizontal: theme.spacing.m,
        paddingHorizontal: theme.spacing.m,
        paddingVertical: theme.borderRadius.m,
        borderRadius: theme.borderRadius.m,
        justifyContent: 'flex-end',
    },
    imageContent: {
        flexDirection: 'row',
        alignItems: 'flex-end',
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
    imageNumber: {
        ...theme.textVariants.body3,
        color: theme.colors.white,
    },
})

export default ShareAlbumTitleCard
