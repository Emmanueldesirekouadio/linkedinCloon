import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);

  // console.log("Photo URL:", user?.photoUrl);

  return (
    <div onClick={onClick} className='headerOption'>
      {Icon && <Icon className='headerOption__icon' />}
      {avatar && (
        <Avatar className='headerOption__icon' src={user?.photoUrl}></Avatar>
      )}
      <h3 className='headerOption__title'>{title}</h3>
    </div>
  );
}

export default HeaderOption;

// import React from "react";
// import "./HeaderOption.css";
// import { Avatar } from "@mui/material";
// import { useSelector } from "react-redux";
// import { selectUser } from "./features/userSlice";

// function HeaderOption({ avatar, Icon, title, onClick }) {
//   const user = useSelector(selectUser);

//   // Affiche les initiales de l'e-mail s'il n'y a pas de photoUrl
//   const getInitials = (email) => {
//     return email ? email.charAt(0).toUpperCase() : "";
//   };

//   // Console.log pour déboguer
//   console.log("Photo URL:", user?.photoUrl);

//   return (
//     <div onClick={onClick} className='headerOption'>
//       {Icon && <Icon className='headerOption__icon' />}
//       {avatar && (
//         <Avatar className='headerOption__icon' style={{ width: '50px', height: '50px' }}>
//           {user?.photoUrl ? (
//             <img src={user?.photoUrl} alt='Avatar' />
//           ) : (
//             getInitials(user?.email)
//           )}
//         </Avatar>
//       )}
//       <h3 className='headerOption__title'>{title}</h3>
//     </div>
//   );
// }

// export default HeaderOption;
