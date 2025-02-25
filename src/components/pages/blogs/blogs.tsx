import { AboutBgWrap, BlogsLeftWrap, BlogsMainWrap, BlogsRightWrap } from "./style"
import arrow from '../../../assets/svg/smallarrow.svg'

const BlogsComponent = () => {
  return (
    <div>
       <div>
           <div className="collection-bg">
             <AboutBgWrap>
               <b>Blogs</b>
               <div
                 style={{
                   width: "900px",
                   height: "0.5px",
                   backgroundColor: "white",
                   marginBottom: "-25px",
                   marginRight: "-155px",
                 }}
               ></div>
               <div>
                 <p>Home</p>
                 <img src={arrow} alt="arrow" />
                 <p>About</p>
               </div>
             </AboutBgWrap>
           </div>
       </div>
       <BlogsMainWrap>
          <BlogsLeftWrap>
              <form action="">
                <input type="search" placeholder="Search"/>
              </form>
          </BlogsLeftWrap>
          <BlogsRightWrap>
            <div></div>
          </BlogsRightWrap>
       </BlogsMainWrap>
    </div>
  )
}

export default BlogsComponent