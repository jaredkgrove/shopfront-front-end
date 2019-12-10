import React, {useEffect} from "react";
import {fetchInstagramPosts} from '../actions/fetchInstagramPosts'
import { connect } from 'react-redux';
import styled from 'styled-components'


const InstagramFeed = ( {fetchInstagramPosts, posts, visible} ) => {
    useEffect(() => {
        fetchInstagramPosts()
    }, []);

    useEffect(() => {
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
      <FeedWrapper onWheel={e => e.stopPropagation()} visible={visible}>
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
  left: 30px;
  box-sizing: border-box;
  flex-grow: 1;
  display: ${props => props.visible ? 'flex' : 'none'};
  flex-direction: column;
  overflow: auto;
  max-height: 100vh;
  width: 326px;
  max-width: calc(100vw - 35px);
  padding: 10px 10px 10px 10px;
`;

