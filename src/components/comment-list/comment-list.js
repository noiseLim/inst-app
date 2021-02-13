import React, {useEffect} from 'react';
import CommentListItem from '../comment-list-item';
import WithInstService from '../hoc';
import {connect} from 'react-redux';
import Error from '../error';
import Spinner from '../spinner';
import {addedToCommentList, commentLoaded, commentRequested, commentError} from '../../actions';

function CommentList({InstService, commentRequested, commentLoaded, commentError, commentItems, error, loading}) {

    // useEffect(() => {
    //     commentRequested();
    //     InstService.getCommentItems()
    //         .then(res => commentLoaded(res))
    //         .catch(error => commentError());
    // }, [])

    if (error) {
        return <Error/>
    }
    if (loading) {
        return <Spinner/>
    }

    const elements = commentItems.map((commentItem) => {
        return (
            <li key={commentItem.id} className="list-group-item">
                <CommentListItem
                    commentItem={commentItem}
                    onAddToComment={() => addedToCommentList(commentItem.id)}/>
            </li>
        )

    })

    return (
        <div className="app-list">
            {elements}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        commentItems: state.comments,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    addedToCommentList,
    // commentLoaded,
    // commentRequested,
    // commentError
}

export default WithInstService()(connect(mapStateToProps, mapDispatchToProps)(CommentList));


// import React, {Component} from 'react';
// import CommentListItem from '../comment-list-item';
// import WithInstService from '../hoc';
// import {connect} from 'react-redux';
// import Error from '../error';
// import Spinner from '../spinner';
// import {addedToCommentList, commentLoaded, commentRequested, commentError} from '../../actions';

// class CommentList extends Component {
//     componentDidMount() {
//         this.props.commentRequested();

//         const {InstService} = this.props;
//         InstService.getCommentItems()
//             .then(res => this.props.commentLoaded(res))
//             .catch(error => this.props.commentError());
//     }

//     render() {
//         const {commentItems, loading, error} = this.props;

//         if (error) {
//             return <Error/>
//         }
//         if (loading) {
//             return <Spinner/>
//         }
    
//         const elements = commentItems.map((commentItem) => {
//             return (
//                 <li key={commentItem.id} className="list-group-item">
//                     <CommentListItem
//                         commentItem={commentItem}
//                         onAddToComment={() => addedToCommentList(commentItem.id)}/>
//                 </li>
//             )
    
//         })
    
//         return (
//             <div className="app-list">
//                 {elements}
//             </div>
//         )
//     }
// }
    
//     const mapStateToProps = (state) => {
//         return {
//             commentItems: state.comments,
//             loading: state.loading,
//             error: state.error
//         }
//     }
    
//     const mapDispatchToProps = {
//         addedToCommentList,
//         commentLoaded,
//         commentRequested,
//         commentError
//     }
    
//     export default WithInstService()(connect(mapStateToProps, mapDispatchToProps)(CommentList));