<html>
<head>
	<title>Hacker News</title>
</head>
<body>
<ul>
	{% for item in list %}
	<li>
		<a href="{{item.url}}">{{helper.relativeTime(item.time)}}, {{item.title}}</a>
	</li>
	{% endfor %}
</ul>
</body>
</html>