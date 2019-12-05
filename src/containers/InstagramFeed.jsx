import React, {useEffect} from "react";
import {fetchInstagramPosts} from '../actions/fetchInstagramPosts'
import { connect } from 'react-redux';
import styled from 'styled-components'


const InstagramFeed = ( {fetchInstagramPosts, posts, visible} ) => {
    useEffect(() => {
        fetchInstagramPosts()
    }, []);

    useEffect(() => {
        console.log(posts)
        if(window.instgrm){
            window.instgrm.Embeds.process()
        }
    }, [posts]);

    const getHTML = (post) => {
      return {__html: post}
    }

    const renderInsta = (post) => {
      return <div dangerouslySetInnerHTML={getHTML(post)} />
    }

    return(
      <FeedWrapper onWheel={e => e.stopPropagation()}>
        {posts.map(post => renderInsta(post))}
      </FeedWrapper>
    )
}
const mapDispatchToProps = dispatch => {
    return {
      fetchInstagramPosts: () => dispatch(fetchInstagramPosts()),
    }
  }

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(InstagramFeed)


const FeedWrapper = styled.div`
  position: absolute;
  top: 0px;
  box-sizing: border-box;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  max-height: 100vh;
  min-width: 326px;
  padding: 10px 10px 10px 10px;
`;

// const Post = styled.div`

// `;