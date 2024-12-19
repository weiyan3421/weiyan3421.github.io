var posts=["2024/12/19/这是一篇新的博文/","2024/12/19/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };