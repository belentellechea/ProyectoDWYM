// Get user data
export const getUser = async (id, token, updateUser) => {
    try {
      const response = await fetch(`http://localhost:3001/api/user/profile/${id}`, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();

      if (!response.ok) throw new Error("Error en la respuesta");

      const newUser = {
        id: data?.user?._id,
        username: data?.user?.username,
        description: data?.user?.description,
        profilePicture: data?.user?.profilePicture,
        friends: data?.user?.friends,
        posts: data?.posts,
      }
      
      updateUser(newUser);

    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  }

  // Change profile look
export const editProfileLook = async (auth, user, newUser, updateUser) => {
  console.log("!!! new user: ", newUser)  
  
  try {
      const response = await fetch(`http://localhost:3001/api/user/profile/edit`, {
        method: "PUT",
        headers: {
          'Authorization': `Bearer ${auth.token}`
        },
        body: {
            "username": newUser?.username, 
            "profilePicture": newUser?.profilePicture,
            "description": newUser?.description
        }
      });

      if (!response.ok) {
        console.log(`Error: ${response.status} - ${response.statusText}`);
        return;
      }

      const data = await response.json(); 
      console.log(data); 

    //   const updatedUser = {
    //     id: user?._id,
    //     username: data?.username,
    //     description: data?.description,
    //     profilePicture: data?.profilePicture,
    //     friends: user?.friends,
    //     posts: user?.posts,
    //   }
    console.log("estoy en editProfileLook")
    console.log(newUser);

      updateUser(newUser);

    } catch (error) {
      console.log("Error fetching data: ", error);
    }
}

export const addFriend = async (auth, newFriend, addFriend) => {
  try {
    const response = await fetch(`http://localhost:3001/api/user/remove-friend/${newFriend.id}`, {
      method: 'PUT',
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

export const removeFriend = async (auth, exfriend, removeFriend) => {
  try {
    const response = await fetch(`http://localhost:3001/api/user/remove-friend/${exfriend.id}`, {
      method: 'PUT',
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