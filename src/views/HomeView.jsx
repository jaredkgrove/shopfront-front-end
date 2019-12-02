import React, {useEffect}  from "react";
import Paper from "@material-ui/core/Paper"
import {fetchInstagramPosts} from '../actions/fetchInstagramPosts'
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';


const HomeView = ({fetchInstagramPosts, posts}) => {
    useEffect(() => {
        fetchInstagramPosts()
    }, []);

    useEffect(() => {
      if(window.instgrm){
        window.instgrm.Embeds.process()

      }
    });

    const getHTML = (post) => {
      return {__html: post}
    }

    const renderInsta = (post) => {
      return <div dangerouslySetInnerHTML={getHTML(post)} />
    }
        return(
            <>

                <Paper> WE ARE J+B</Paper>
                <Grid container>

                  {posts.map(post => renderInsta(post))}
                </Grid>

            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)


