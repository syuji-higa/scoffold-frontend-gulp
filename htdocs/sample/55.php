<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <title>top title</title>
    <meta name="description" content="top description">
    <meta name="keywords" content="top keywords">
    <meta property="og:title" content="title">
    <meta property="og:description" content="description">
    <meta property="og:url" content="//ogp.org">
    <meta property="og:image" content="//ogp.org/ogp.png">
    <meta property="og:type" content="website">
    <link rel="shortcut icon" href="/favicon.ico">
    <link rel="stylesheet" href="/styles/style.css" media="all">
    <script src="/scripts/index.js"></script>
  </head>
  <body id="body-id" class="body-class">
    <div class="wrap">
      <header></header>
      <div class="contents">
        <p>I'm hungry.</p>
        <p><img src="images/sample.gif" alt=""></p>
        <ul class="sprite">
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <p class="btn"></p>
      </div>
      <div class="result"></div>
      <script type="text/template" class="template">
        <% _.forEach(data, function(v) { %>
        <p data-<%= v.class %>>-----</p>
        <p class="<%= v.class %>"><%= v.name %></p>
        <p><%= v.age %></p><% }); %>
      </script>
      <button>button</button>
      <p class="txt">test</p>
      <footer></footer>
    </div>
  </body>
</html>