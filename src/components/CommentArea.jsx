import Comment from "./Comment";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiUser from "../apiUser";

export default function CommentArea() {
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await apiUser.get(`/anime/comentarios-anime/${id}`);

        if (response.status !== 200) {
          setComments([]);
        } else {
          setComments(response.data);
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setComments([]);
        } else {
          console.log(error);
        }
      }
    };

    fetchComments();
  }, [id]);

  return (
    <>
      <div className="comments">
        {comments.map((item, index) => (
          <Comment
            key={index}
            name={item.usuarioSimplesDto.name}
            image={item.usuarioSimplesDto.profileImage}
            replies={1}
            text={item.texto}
            date={item.data}
            liked={1}
            desliked={1}
          />
        ))}
      </div>
    </>
  );
}
