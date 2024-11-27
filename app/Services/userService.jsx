const url = "http://172.20.10.7:3001";

export const getAllProfiles = async (auth) => {
  try {
    const response = await fetch( url+`/api/user/all`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${auth.token}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();

    console.log("data response all users: ", data);
    if (!response.ok) throw new Error("Error en la respuesta");
    
    return data;

  } catch (error) {
    console.log("Error fetching data: ", error);
  }
}

// Get user data
export const getUser = async (id, token, updateUser) => {
    try {
      const response = await fetch( url+`/api/user/profile/${id}`, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();

      if (!response.ok) throw new Error("Error en la respuesta");

      const user = {
        id: data?.user?._id,
        username: data?.user?.username,
        description: data?.user?.description,
        profilePicture: data?.user?.profilePicture,
        friends: data?.user?.friends,
        posts: data?.posts,
      }
      console.log("data response get user: ", data );
      if (updateUser) updateUser(user);
      
      return user;

    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  }

  // Change profile look
export const editProfileLook = async (auth, user, newLook, updateUser) => {
  
  try {
      const response = await fetch( url+`/api/user/profile/edit`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth.token}`
        },
        body: JSON.stringify(newLook)
      });

      if (!response.ok) {
        console.log(`Error: ${response.status} - ${response.statusText}`);
        return;
      }

      const data = await response.json(); 
      console.log(data); 

      const updatedUser = {
        id: user?._id,
        username: data?.user?.username,
        description: data?.user?.description,
        profilePicture: data?.user?.profilePicture,
        friends: user?.friends,
        posts: user?.posts,
      }

      updateUser(updatedUser);

    } catch (error) {
      console.log("Error fetching data: ", error);
    }
}

export const followFriend = async (auth, newFriend, addFriend) => {
  try {
    const response = await fetch( url+`/api/user/add-friend/${newFriend._id}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${auth.token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData.message);
    }

    const data = await response.json();
    console.log(data.message); 

    addFriend(newFriend);
    
  } catch (error) {
    console.log("Error:", error);
  }
}

export const unfollowFriend = async (auth, exfriend, removeFriend) => {
  try {
    const response = await fetch( url+`/api/user/remove-friend/${exfriend._id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${auth.token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData.message);
    }

    const data = await response.json();
    console.log(data.message); 

    removeFriend(exfriend);

  } catch (error) {
    console.log("Error:", error);
  }
}
