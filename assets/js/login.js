import user from "./user.js";
import { curruser, updateToLocacle } from "./cart.js";
const [addBal] = document.getElementsByClassName("addbal-btn");

let localuser = localStorage.getItem("userList");
const userList = [];
// export const [curruser] = userList.filter((u) => u.id === userId)
// function updateToLocacle() {
//     let newuserList = userList.map((item) => {
//         if (item.id === userId)
//             return { ...item, cart: currcart, ownedGame: paidcart }
//         return { ...item }
//     })
//     localStorage.setItem('userList', JSON.stringify(newuserList))
// }

if (localuser != null) {
  const templist = JSON.parse(localuser);
  for (const item of templist) {
    userList.push(
      new user(
        item.name,
        item.password,
        item.email,
        item.cart,
        item.balance,
        item.ownedGame,
        item.isadmin,
        item.banned,
        item.id
      )
    );
  }
  user.userid = parseInt(userList[userList.length - 1].id.replace("u", "")) + 1;
}

if (localuser == null) {
  const admin = new user("admin", "123456", "", [], 1000, [], true);
  userList.push(admin);
  localuser = JSON.stringify(userList);
  localStorage.setItem("userList", localuser);
}

const [loginBtn] = document.getElementsByClassName("login-btn");
export const [userBalance] = document.getElementsByClassName("user-balance");
const [userName] = document.getElementsByClassName("username");
const [userAvt] = document.getElementsByClassName("useravt");

const [libraryBtn] = document.getElementsByClassName("library");

window.onload = (e) => {
  const currentUser = localStorage.getItem("currentUser");
  if (currentUser === null) {
    loginBtn.style.display = "flex";
    libraryBtn.style.display = "none";
    addBal.style.display = "none";
    return;
  }
  const userOnline = localStorage.getItem("currentUser");
  const [curUser] = userList.filter((u) => u.id === userOnline);


  loginBtn.style.display = "none";
  addBal.style.display = "flex";
  libraryBtn.style.display = "block";
  userName.style.display = "flex";
  userName.textContent = curUser.name;
  userBalance.style.display = "flex";
  userBalance.textContent = `${curUser.balance.toLocaleString("us")}đ`;
  userAvt.style.display = "flex";
  if (curUser.isadmin) {
    const configbtn = document.getElementById("config");
    configbtn.style.display = "flex";
  }
};

const [userMenu] = document.getElementsByClassName("user-menu");
userAvt.onclick = () => {
  userMenu.classList.toggle("showflex");
};

const logoutBtn = document.getElementById("logout");
logoutBtn.onclick = () => {
  localStorage.removeItem("currentUser");
  location.reload();
};

addBal.onclick = () => {
  curruser.balance += 1000000;
  updateToLocacle();
  userBalance.textContent = `${curruser.balance.toLocaleString("us")}đ`;
};

// const userSearch = (name, password) => {
//     for (let i of userList) {
//         if (i.name === name && i.password === password) return true
//     }
//     return false
// }

// export const banneUser = (id) => {
//     userList = userList.map((u) => {
//         if (u.id === id) {
//             if (u.banned) return { ...u, banned: false }
//             return { ...u, banned: true }
//         }
//         return { ...u }
//     })
//     localStorage.setItem('userList', JSON.stringify(templist))
// }

function signup(wrapper) {
  event.preventDefault();
  const name = document.getElementById("signup-name");
  const email = document.getElementById("email");
  const password = document.getElementById("signup-password");
  let filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  let success = true;
  if (name.value === "") {
    alert("Tên đăng nhập không được rỗng");
    name.focus();
    success = false;
  } else {
    if (name.value.length < 5 || name.value.length > 9) {
      alert(" tên đang nhập từ 5 đến 9 ký tự");
      name.focus();
      success = false;
    }
  }
  if (email.value === "") {
    alert("Email không được rỗng");
    email.focus();
    success = false;
  } else {
    if (!filter.test(email.value)) {
      alert("Hãy nhập địa chỉ email hợp lệ.\nExample@gmail.com");
      email.focus;
      success = false;
    }
  }
  if (password.value === "") {
    alert("Mật khẩu không được rỗng");
    password.focus();
    success = false;
  } else {
    if (password.value.length < 5) {
      alert("Mật khẩu nhiều hơn 5 ký tự");
      password.focus();
      success = false;
    }
  }
  if (success) {
    const [curUser] = userList.filter((u) => u.name === name.value);
    if (curUser) {
      alert("Tên đăng nhập đã tồn tại");
      return;
    }
    const newUser = new user(name.value, password.value, email.value);
    userList.push(newUser);
    localuser = JSON.stringify(userList);
    localStorage.setItem("userList", localuser);
    alert("Đăng kí thành công");
    wrapper.classList.toggle("active");
  }
}

function login() {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  const [loginuser] = userList.filter(
    (u) => u.name === name && u.password === password
  );

  if (loginuser === undefined) {
    alert('Incorrect username or password or account not found')
  }
  else if (loginuser.banned) {
    alert('Your account is banned')
  }
  else if (loginuser) {
    localStorage.setItem('currentUser', loginuser.id)
    location.reload()
  }
}

const navLogin = document.getElementById("nav-login");

navLogin.onclick = () => {
  loginPoup();
};

const loginPoup = () => {
  loginForm.innerHTML = `
    <div class="login-popup">
    <div class="form-wrapper sign-in">
      <form action="" id="signin">
        <h2>Sign In</h2>
        <div class="input-group">
          <input type="text" required id="name" placeholder="Enter your username" autocomplete="off">
          <label for="">Username</label>
        </div>
        <div class="input-group">
          <input type="password" required id="password" placeholder="Enter your password" autocomplete="off">
          <label for="">Password</label>
        </div>
        <!-- <div class="remember">
          <label><input type="checkbox"> Remember me</label>
        </div> -->
        <button class="loginform-btn" type="submit">Sign In</button>
        <div class="signUp-link">
          <p>Don't have an account? <a href="#" class="signUpBtn-link">Sign Up</a></p>
        </div>
      </form>
    </div>
    <div class="form-wrapper sign-up">
      <form action="" id="signup">
        <h2>Sign Up</h2>
        <div class="input-group">
          <input type="text" required id="signup-name" placeholder="Enter your username" autocomplete="off">
          <label for="">Username</label>
        </div>
        <div class="input-group">
          <input type="text" required id="email" placeholder="Enter your email" autocomplete="off">
          <label for="">Email</label>
        </div>
        <div class="input-group">
          <input type="password" required id="signup-password" placeholder="Enter your password" autocomplete="off">
          <label for="">Password</label>
        </div>
        <!-- <div class="remember">
          <label><input type="checkbox"> I agree to the terms & conditions</label>
        </div> -->
        <button class="loginform-btn" type="submit">Sign Up</button>
        <div class="signUp-link">
          <p>Already have an account? <a href="#" class="signInBtn-link">Sign In</a></p>
        </div>
      </form>
    </div>
    </div>
    `;
  loginFormContainer.style.top = 50 + "%";
  const body = document.getElementsByTagName("BODY")[0];
  body.style.overflow = "hidden";

  const signInBtnLink = document.querySelector(".signInBtn-link");
  const signUpBtnLink = document.querySelector(".signUpBtn-link");
  const [wrapper] = document.getElementsByClassName("login-popup");
  const signupForm = document.getElementById("signup");
  const signinForm = document.getElementById("signin");

  signUpBtnLink.addEventListener("click", () => {
    wrapper.classList.toggle("active");
  });
  signInBtnLink.addEventListener("click", () => {
    wrapper.classList.toggle("active");
  });

  signinForm.onsubmit = () => {
    login();
  };

  signupForm.onsubmit = () => {
    signup(wrapper);
  };
};

const closeLoginPopup = () => {
  loginForm.innerHTML = ``;
  loginFormContainer.style.top = -100 + "%";
  const body = document.getElementsByTagName("BODY")[0];
  body.style.overflow = "auto";
};

const loginFormContainer = document.getElementById("popup-wrapper");
const [loginForm] = document.getElementsByClassName("popup-content");
loginFormContainer.onclick = () => {
  closeLoginPopup();
};
loginForm.onclick = () => {
  event.stopPropagation();
};

export default userList;
