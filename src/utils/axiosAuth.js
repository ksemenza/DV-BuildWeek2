import axios from "axios";

const axiosAuth = () => {

  const token = localStorage.getItem('token')
  const userID = localStorage.getItem('user_id')
  
  const testUserID = 7
  const testToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywidXNlcm5hbWUiOiJrc2VtZW56YSIsInBhc3N3b3JkIjoiJDJhJDEyJEI0WEdGeUNCY2RKQ1p5ZnQuSG1xQWVnVUZsNUp4QXlqQXNUS0FuQVp3cUd4ajBIdGE0Y1lHIiwiaWF0IjoxNTg1ODUwODgxLCJleHAiOjE1ODYyODI4ODF9.4PPC469FglXrhqmNKafNJC2V_l6NTzPJCrwKg4x8WU8"
  return axios.create({
    
    baseURL: `https://dvscalculator.herokuapp.com/users/${testUserID}`,
    headers: {
      Authorization: testToken
     
    }
  });
};


export default axiosAuth