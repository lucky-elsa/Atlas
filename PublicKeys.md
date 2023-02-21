## 🧩 How to add keys in `.env` file

- Rename `.env.example` to `.env` and fill in the required details in `.env` file and `config.js` (Mandatory).

```
MODS=918101187835,923045204414
MONGODB=mongodb+srv://fantox:xrto71r@cluster0.dnlowts.mongodb.net/?retryWrites=true&w=majority
SESSION_ID= anyrandomstring
PREFIX=-
TENOR_API_KEY=AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c
PACKNAME=Atlas MD
AUTHOR=FantoX
```

<br>

### 🎀 Mods( Must be added ):
- Mods are the people who can use `mod` commands like: `ban`, `unban`, `mute`, `unmute`, `add`, `remove` etc.
- In other works they are Maintainers of the bot.
- You can add multiple mods by separating their numbers with `,` like: `918101187835,923045204414` etc. where `91` is country code and `8101187835` is phone number. ( Do not use international format like: `+91 8101187835` or `+918101187835` etc. And also do not use `0` before country code like: `0918101187835` etc.)

<br>

### 🧩 Pubic MongoDB URL ( You should use your own if you have one ):

```
mongodb+srv://fantox001:zjmbvgwr52@cluster0.qh05pl9.mongodb.net/?retryWrites=true&w=majority
```
- Public database is to store user levels, banning, bot mode and other important data.

<br>

### ⚜️ Pubic Tenor API Key ( You should use your own if you have one ):

```
AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c
```

<br>

### 💫 Session ID ( Must be changed everytime to get new qr code ):

- You can use any random string as `SESSION_ID` value like: `abcd123` or `aa` etc.
- You can also use your name as `SESSION_ID` value like: `FantoX` or `FantoX001` etc.
- Node: You must change `SESSION_ID` value if you want to `login again` with `new qr` code.

<br>

### 🏮 Prefix: 

- You can use any prefix you want like: `#` or `!` or `.` etc.
- Don't use `@` as prefix as it will cause issues.
