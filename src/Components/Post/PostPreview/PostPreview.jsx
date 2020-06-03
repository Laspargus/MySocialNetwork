import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DeletePost from "./../DeletePost/DeletePost";
import EditPost from "./../EditPost/EditPost";
import LikePost from "./../LikePost/LikePost";
import { editPost } from "./../../../redux/Post/actions";
import { setLikeApi } from "./../../../Api/PostApi";

const PostPreview = ({ handleEdit, handleDelete, post, isAuthenticated }) => {
  const author_id = post.user.id;
  const current_user_id = useSelector(
    (state) => state.authentification.user_id
  );
  const token = useSelector((state) => state.authentification.token);

  const [isowner, SetIsOwner] = useState(false);
  const [edit, SetEdit] = useState(false);
  const [like, SetLike] = useState("");
  const [toggleButton, SetToggleButton] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (current_user_id === author_id) {
      SetIsOwner(true);
    }
    if (post.like == null) {
      SetLike(1);
    } else {
      SetLike(post.like);
    }
    SetToggleButton(true);
  }, []);

  const incrementLike = async () => {
    SetToggleButton(!toggleButton);
    const editedPost = await setLikeApi(post.id, like + 1, token);
    SetLike(like + 1);
    dispatch(editPost(editedPost));
  };

  const decrementLike = async () => {
    SetToggleButton(!toggleButton);
    SetLike(like - 1);
    const editedPost = await setLikeApi(post.id, like - 1, token);
    dispatch(editPost(editedPost));
  };

  // const handleErrors = (response) => {
  //   if (!response.ok) {
  //     throw Error(response.statusText);
  //   }
  //   return response;
  // };

  return (
    <>
      {isAuthenticated && (
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <Link className="card-title" to={"profiles/" + post.user.id}>
                {post.user.username}
              </Link>
              <p>Like : {like} </p>
              <p className="card-text">{post.text}</p>
              {isowner && (
                <>
                  <DeletePost post={post} handleDelete={handleDelete} />

                  {edit ? (
                    <EditPost post={post} handleEdit={handleEdit} />
                  ) : (
                    <button
                      className="btn-warning btn"
                      onClick={() => SetEdit(true)}
                    >
                      Edit
                    </button>
                  )}
                </>
              )}

              <LikePost
                toggleButton={toggleButton}
                incrementLike={incrementLike}
                decrementLike={decrementLike}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostPreview;
