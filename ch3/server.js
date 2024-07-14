const express = require("express");
const request = require("request");
const app = express();

/** 설정(과제 하는데 중요치 않으니 신경 안써도 되는 부분.) */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("views", `${__dirname}/views`);
app.set("view engine", "hbs");
/** 설정 */

app.get("/", (req, res) => {
  res.render("index", {
    title: "과제",
    subject: "Hello 과제",
  });
});

app.get("/login", (req, res) => {
  res.render("login", {
    title: "과제",
    subject: "로그인",
  });
});

app.get("/register", (req, res) => {
  res.render("register", {
    title: "과제",
    subject: "회원가입",
  });
});

app.post("/login", (req, res) => {
  // 아래 로직을 구현하라.
  // 1. 클라이언트에서 전달한 email을 이용하여 userDB에서 찾는다.
  // 2. 없으면 '회원이 아닙니다.' 출력
  // 3. 있고 비밀번호가 맞으면 'xxx님 안녕하세요 출력'
  // 4. 비밀번호가 틀리면 '비밀번호가 틀립니다.' 출력

  // ex) return res.send("비번이 틀렸습니다");
  // ex) return res.send(`${user.name}님 어서오세요`);
  // ex) return res.send("회원이 아닙니다");

  // 입력된 이메일, 패스워드
  // req.body.email, req.body.password

  // find 요청 시 받아온 user data type - rq: { email, password, name }

  request.post(
    "http://localhost:4001/find",
    {
      form: {
        email: req.body.email,
      },
    },
    (err, rs, rq) => {
      const code = rs.statusCode;
      if (code === 200) {
        const user = JSON.parse(rq);
      } else {
      }
    }
  );

  console.log(req.body);
});

app.post("/register", (req, res) => {
  // 아래 로직을 구현하라.
  // 1. userDB에 회원정보를 저장한다.
  if (!req.body.email) {
    return res.send("이메일을 입력하세요.");
  }
  if (!req.body.name) {
    return res.send("이름을 입력하세요.");
  }
  if (!req.body.password) {
    return res.send("비밀번호를 입력하세요.");
  }
  request.post("http://localhost:4001/users", {
    form: {
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
    },
  });
  res.redirect("/login");
});

app.get("/users", (req, res) => {
  request("http://localhost:4001/users", (err, response, body) => {
    res.render("users", {
      userList: JSON.parse(body),
    });
  });
});

app.listen(4000, () => {
  console.log("RUN PORT 4000 SERVER");
});
