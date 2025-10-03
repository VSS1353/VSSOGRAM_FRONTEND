import React, { useState, useEffect } from 'react';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'Sai Santhosh',
    username: 'VSS1353',
    email: 'vemireddisaisanthosh@gmail.com',
    bio: 'Photography enthusiast | Travel lover | Coffee addict',
    profileImage: 'https://via.placeholder.com/150',
    posts: 24,
    followers: 1234,
    following: 567,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    setUser(editedUser);
    setIsEditing(false);
    // Here you would typically make an API call to save the changes
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-image-container">
          <img 
            src={user.profileImage} 
            alt={user.name} 
            className="profile-image"
          />
          {isEditing && (
            <button className="change-photo-btn">
              Change Photo
            </button>
          )}
        </div>
        
        <div className="profile-info">
          {isEditing ? (
            <div className="edit-form">
              <input
                type="text"
                name="name"
                value={editedUser.name}
                onChange={handleInputChange}
                className="edit-input"
              />
              <input
                type="text"
                name="username"
                value={editedUser.username}
                onChange={handleInputChange}
                className="edit-input"
              />
              <textarea
                name="bio"
                value={editedUser.bio}
                onChange={handleInputChange}
                className="edit-bio"
                rows="3"
              />
              <div className="button-group">
                <button onClick={handleSave} className="save-btn">Save</button>
                <button onClick={() => setIsEditing(false)} className="cancel-btn">Cancel</button>
              </div>
            </div>
          ) : (
            <>
              <div className="profile-actions">
                <h1>{user.name}</h1>
                <button 
                  onClick={() => setIsEditing(true)}
                  className="edit-profile-btn"
                >
                  Edit Profile
                </button>
              </div>
              <p className="username">@{user.username}</p>
              <p className="bio">{user.bio}</p>
              <div className="stats">
                <div className="stat">
                  <span className="stat-count">{user.posts}</span>
                  <span className="stat-label">Posts</span>
                </div>
                <div className="stat">
                  <span className="stat-count">{user.followers}</span>
                  <span className="stat-label">Followers</span>
                </div>
                <div className="stat">
                  <span className="stat-count">{user.following}</span>
                  <span className="stat-label">Following</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="profile-posts">
        <h2>Your Posts</h2>
        <div className="posts-grid">
          {/* This would be mapped from user's posts */}
          <div className="post-thumbnail">
            <img src="https://via.placeholder.com/300" alt="Post" />
          </div>
          <div className="post-thumbnail">
            <img src="https://via.placeholder.com/300" alt="Post" />
          </div>
          <div className="post-thumbnail">
            <img src="https://via.placeholder.com/300" alt="Post" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
