---
title: "News"
layout: textlay
excerpt: "Pellizzeri Lab at Eastern Illinois University."
sitemap: false
permalink: /allnews.html
---

# News

<ul class="list-unstyled" markdown="0">
{% for article in site.data.news %}
	<li class="mb-3">
		<article>
			<small class="text-muted d-block">{{ article.date }}</small>
	  <p class="mb-1 news-headline"><em>{{ article.headline | replace: '<img ', "<img alt='news image' " }}</em></p>
		</article>
	</li>
{% endfor %}
</ul>
