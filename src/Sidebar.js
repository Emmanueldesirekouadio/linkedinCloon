import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

function Sidebar() {
  // Utilise le hook useSelector pour obtenir l'état de l'utilisateur depuis le store Redux
  const user = useSelector(selectUser);

  // Fonction pour créer un élément récent
  const recentItem = (topic) => (
    <div className='sidebar__recentItem'>
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>
  );

  // Rendu du composant Sidebar
  return (
    <div className='sidebar'>
      {/* Vérifie si l'utilisateur est défini avant de rendre le contenu du Sidebar */}
      {user && (
        <>
          <div className='sidebar__top'>
            {/* Image de fond du haut du Sidebar */}
            <img
              src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWR8MXx8fGVufDB8fHw%3D&w=1000&q=80'
              alt=''
            />
            {/* Avatar de l'utilisateur */}
            <Avatar src={user.photoUrl} className='sidebar__avatar'>
              {/* Affiche la première lettre de l'email de l'utilisateur */}
              {user.email && user.email[0]}
            </Avatar>
            {/* Affiche le nom d'affichage de l'utilisateur */}
            <h2>{user.displayName}</h2>
            {/* Affiche l'email de l'utilisateur */}
            <h4>{user.email}</h4>
          </div>

          {/* Statistiques du Sidebar */}
          <div className='sidebar__stats'>
            <div className='sidebar__stat'>
              <p>Who viewed you</p>
              <p className='sidebar__statNumber'>2,543</p>
            </div>
            <div className='sidebar__stat'>
              <p>Views on post</p>
              <p className='sidebar__statNumber'>100</p>
            </div>
          </div>

          {/* Éléments récents du Sidebar */}
          <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItem("reactjs")}
            {recentItem("programming")}
            {recentItem("softwareengineering")}
            {recentItem("design")}
            {recentItem("Ai")}
          </div>
        </>
      )}
    </div>
  );
}

export default Sidebar;
