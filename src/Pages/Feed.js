import React, { Fragment, useState, useEffect } from 'react';
import Header from '../Components/Feed/Header'
import {
    FlatList,
    Text
} from 'react-native';
import Content from '../Components/Feed/Content';

const users = [
    { id: 1, name: 'João', avatarUrl: require('../Images/avatar.jpg') },
    { id: 2, name: 'Maria', avatarUrl: require('../Images/avatar.jpg') },
]

const FeedPage = () => {
    const [feed, setFeed] = useState([]);

    useEffect(() => {
        const requestFeed = async () => {
            let feedResponse = await fetch(
                'http://10.0.2.2:3030/feed'
            )
            let feedResponseJson = await feedResponse.json();

            setFeed(feedResponseJson)
        }

        requestFeed();

    }, [])

    return (
        <FlatList
            data={feed}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) =>
                <Fragment>
                    <Header user={item} />
                    <Content urlImage={item.url} />
                </Fragment>
            }
        />
    )
}

export default FeedPage;