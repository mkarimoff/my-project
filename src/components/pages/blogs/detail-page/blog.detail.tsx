import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import arrow from "../../../../assets/svg/smallarrow.svg";
import { AboutBgWrap } from "../style";
import { BlogsMockData } from "../../mockdata/blogs.mock";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useAuth } from '../../../context/authContext';
import { BlogDetailCon } from './style';
import { toast } from 'react-toastify'; 

interface CommentType {
  _id: string;
  userId: string;
  userName: string;
  text: string;
  createdAt: string;
}

const BlogDetail = () => {
  const { id } = useParams();
  const [comments, setComments] = useState<CommentType[]>([]);
  const [text, setText] = useState("");
  const { isAuthenticated, user } = useAuth();
  const [newCommentId, setNewCommentId] = useState<string | null>(null); 
  const navigate = useNavigate();
  const commentContainerRef = useRef<HTMLDivElement | null>(null); 

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
    AOS.refresh();
    return () => AOS.refreshHard();
  }, []);

  const data = BlogsMockData.find((value) => value.id.toString() === id);

  const fetchComments = async () => {
    try {
      const res = await axios.get("http://localhost:5050/dev-api/comment/getComments");
      setComments(res.data.data);
    } catch (err) {
      console.error("Failed to fetch comments", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text) return;

    if (!isAuthenticated) {
      toast.error("You must be logged in to comment.");
      navigate("/");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5050/dev-api/comment/createcomment", {
        userId: user?.id,
        userName: user?.firstName + " " + user?.lastName,
        text,
      });
      setText("");
      setNewCommentId(res.data.data._id); 
      fetchComments();
      
      setTimeout(() => {
        const newCommentElement = document.getElementById(res.data.data._id);
        if (newCommentElement && commentContainerRef.current) {
          newCommentElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }, 100); 
    } catch (err) {
      console.error("Failed to submit comment", err);
    }
  };

  const handleDelete = async (commentId: string) => {
    try {
      await axios.delete(`http://localhost:5050/dev-api/comment/delete/${commentId}`);
      fetchComments(); 
      toast.success("Comment deleted successfully.");
    } catch (err) {
      console.error("Failed to delete comment", err);
      toast.error("Failed to delete comment.");
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  useEffect(() => {
    if (newCommentId) {
      const timer = setTimeout(() => {
        setNewCommentId(null); 
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [newCommentId]);

  return (
    <>
      <BlogDetailCon>
        <div className="collection-bg">
          <AboutBgWrap>
            <b>Blog Details</b>
            <div style={{ width: "900px", height: "0.5px", backgroundColor: "white", marginBottom: "-25px", marginRight: "-155px" }} />
            <div>
              <p>Home</p>
              <img src={arrow} alt="arrow" />
              <p>Blog Details</p>
            </div>
          </AboutBgWrap>
        </div>

        <img src={data?.photo} alt="image" className="product-image" data-aos="fade-up" />
        <div className="texts-wrap" data-aos="fade-up">
          <h1>{data?.header}</h1>
          <div className="date-author-wrap">
            <div>
              <b>{data?.date_name}</b>
              <p>{data?.date}</p>
            </div>
            <div>
              <b>{data?.author}</b>
              <p>{data?.author_name}</p>
            </div>
          </div>
          <div className="descs-wrap">
            <p>{data?.description}</p>
            <p>{data?.second_description}</p>
          </div>
        </div>

        <div className="comments-wrap" data-aos="fade-up">
          <h2>{comments.length} Comments available</h2>

          <div className="comment-scroll-container" ref={commentContainerRef}>
            <div className="comment-list">
              {comments.map((comment) => (
                <div
                  key={comment._id}
                  id={comment._id} 
                  className={`comment-item ${comment._id === newCommentId ? "new-comment" : ""}`}
                >
                  <div className="comment-header">
                    <div className="user-avatar">
                      {comment.userName.charAt(0).toUpperCase()}
                    </div>
                    <div className="user-info">
                      <strong>{comment.userName}</strong>
                      <span className="comment-date">
                        Date: {new Date(comment.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                  <p className="comment-text">{comment.text}</p>

                  {/* Show delete button only if the user is the comment owner or an admin */}
                  {(comment.userId === user?.id || user?.role === 'admin') && (
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(comment._id)}
                    >
                      Delete
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <textarea
              placeholder="Write a comment"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button type="submit" className='submit'>Submit</button>
          </form>
        </div>
      </BlogDetailCon>
    </>
  );
};

export default BlogDetail;
