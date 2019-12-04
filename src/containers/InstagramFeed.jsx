import React, {useEffect} from "react";
import {fetchInstagramPosts} from '../actions/fetchInstagramPosts'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles(theme => ({
    root: {
        boxSizing:'border-box',
        // float: "right",
        // width: '100%',
        flexGrow: 1,
        display:'flex',
        flexDirection: 'column',
        overflow: 'auto',
        maxHeight: '100vh',
        minWidth: '326px',
        padding: '10px 10px 10px 10px',
        transition: 'height 500ms ease-in-out, opacity 500ms ease-in-out',
        // position:'absolute',
        // top:'0'

    },
    hidden: {
        height:'0px',
        opacity:'0'
    },
    post: {
      // width: '100%'
    }
  }));

const InstagramFeed = ( {fetchInstagramPosts, posts, visible} ) => {
    const classes = useStyles();
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
      return <div className={classes.post} dangerouslySetInnerHTML={getHTML(post)} />
    }

    return(
        <div className={  visible ? classes.root:`${classes.root} ${classes.hidden}` } >
            {posts.map(post => renderInsta(post))}
        </div>
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


