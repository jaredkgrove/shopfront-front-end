import React, {useEffect}  from "react";
import Paper from "@material-ui/core/Paper"
import {fetchInstagramPosts} from '../actions/fetchInstagramPosts'
import { connect } from 'react-redux';


const HomeView = ({fetchInstagramPosts, posts}) => {
    useEffect(() => {
        fetchInstagramPosts()
    }, []);

        return(
            <>
                {/* <Paper> WE ARE J+B</Paper> */}

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


