import axios from "axios";

export const useRateCourse = () => {
  const postComment = (comment) => {
    axios({
      method: 'get',
      url: 'http://localhost:5000/',
    }).then((res) => {
      console.log(res.data);
    });
  }
  
  return {
    postComment
  }
}