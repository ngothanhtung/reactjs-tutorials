# Hướng dẫn làm bài tập

1. Tại ở đĩa D, tạo thư mục Reactjs
2. Mở cửa số bash (Chuột phải chọn Git Bash Here)
3. Gõ lệnh để tạo 1 project React như sau:

   ```
   npx create-react-app my-app
   ```

4. Mở VS Code lên vào open folder, chọn folder my-app để mở project
5. Cấu trúc project sau khi tạo trong như sau:

   ```
   my-app
   ├── README.md
   ├── node_modules
   ├── package.json
   ├── .gitignore
   ├── public
   │   ├── favicon.ico
   │   ├── index.html
   │   ├── logo192.png
   │   ├── logo512.png
   │   ├── manifest.json
   │   └── robots.txt
   └── src
       ├── App.css
       ├── App.js
       ├── App.test.js
       ├── index.css
       ├── index.js
       ├── logo.svg
       ├── serviceWorker.js
       └── setupTests.js
   ```

6. Trong VS Code, mở cửa số terminal bằng cách chọn Terminal => New Terminal ở menu phía trên, su đó gõ lệnh sau để chạy project:

   ```
   npm run start
   ```

   hoặc

   ```
   yarn start
   ```

# THỰC HIỆN CÁC BÀI TẬP:

# PHẦN BẮT BUỘC:

## 1. Basic UI

- Yêu cầu làm giống hệt UI sau (hình ảnh để trong thư mục ./basic-images/):

  ![](https://github.com/ngothanhtung/reactjs-tutorials/blob/master/3-Homeworks/Session02/basic-1.jpg?raw=true)

## 2. Basic UI

- Yêu cầu làm giống hệt UI sau (hình ảnh để trong thư mục ./basic-images/):

  ![](https://github.com/ngothanhtung/reactjs-tutorials/blob/master/3-Homeworks/Session02/basic-2.jpg?raw=true)

## 3. Basic UI

- Yêu cầu làm giống hệt UI sau (hình ảnh để trong thư mục ./basic-images/):

  ![](https://github.com/ngothanhtung/reactjs-tutorials/blob/master/3-Homeworks/Session02/basic-3.jpg?raw=true)

# PHẦN LUYỆN TẬP

## 1. Block UI

- Làm 1 component đặt tên là ChartBar1, sau đó sử dụng component này để tạo ra các blocks còn lại theo cách truyền props
- Component này có có props sau:

```ts
{
  text: string,
  color1: string,
  colors: string
  percentage: number
}
```

![](https://github.com/ngothanhtung/reactjs-tutorials/blob/master/3-Homeworks/Session02/block-ui-1.jpg?raw=true)

## 2. Block UI

- Làm 1 component đặt tên là Profile
- Component này có các props sau:

```ts
{
  name: string,
  title: string,
  followers: number,
  followings: number,
  messages: number,
  likes: number,
  comments: number
}
```

![](https://github.com/ngothanhtung/reactjs-tutorials/blob/master/3-Homeworks/Session02/block-ui-2.jpg?raw=true)

## 3. Block UI

- Làm 1 component đặt tên là SocialBlock, sau đó sử dụng component này để tạo ra các blocks còn lại theo cách truyền props
- Component này có có props sau:

```ts
{
  text: string,
  color: string,
  iconName: string
  total: number
  unit: string // unit='Likes' hoặc unit='Tweets', ...
}
```

![](https://github.com/ngothanhtung/reactjs-tutorials/blob/master/3-Homeworks/Session02/block-ui-3.jpg?raw=true)

## 4. Block UI

- Làm 1 component đặt tên là ChartColumn, sau đó sử dụng component này để tạo ra các blocks còn lại theo cách truyền props
- Component này có các component con bên trong như: Text, Column, ...
- Component này có có props sau:

```ts
{
  text: string,
  total: number
  unit: string // unit='' hoặc unit='$', ...
  percentages: [20, 45, 30, 80, 75]
}
```

![](https://github.com/ngothanhtung/reactjs-tutorials/blob/master/3-Homeworks/Session02/block-ui-4.jpg?raw=true)

## 5. Block UI

- Làm 1 component đặt tên là Person, sau đó sử dụng component này để tạo ra các blocks còn lại theo cách truyền props
- Component này có các components con bên trong như: Avatar, Text, Information, ContactBlock, ...:

![](https://github.com/ngothanhtung/reactjs-tutorials/blob/master/3-Homeworks/Session02/block-ui-5.jpg?raw=true)

# PHẦN NÂNG CAO:

## 1. Advanced Block UI

- Các images tài nguyên trong folder ./block-ui-6-images/

![](https://github.com/ngothanhtung/reactjs-tutorials/blob/master/3-Homeworks/Session02/block-ui-6.jpg?raw=true)

## 1. Advanced Block UI

- Các images tài nguyên trong folder ./block-ui-7-images/

![](https://github.com/ngothanhtung/reactjs-tutorials/blob/master/3-Homeworks/Session02/block-ui-7.jpg?raw=true)

# PHẦN TỔNG HỢP / SÁNG TẠO:

- Tự làm cho mình 1 hồ sơ năng lực, ví dụ như sau:

![](https://github.com/ngothanhtung/reactjs-tutorials/blob/master/3-Homeworks/Session02/resume-1.png?raw=true)

![](https://github.com/ngothanhtung/reactjs-tutorials/blob/master/3-Homeworks/Session02/resume-2.jpg?raw=true)

![](https://github.com/ngothanhtung/reactjs-tutorials/blob/master/3-Homeworks/Session02/resume-3.jpg?raw=true)
