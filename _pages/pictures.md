---
title: "Pellizzeri Lab - Pictures"
layout: piclay
excerpt: "Pellizzeri Lab -- Pictures"
permalink: /pictures/
---

# Pictures

## Gallery

<p class="text-muted">Click any image to view the full-size version.</p>

<div class="row row-cols-1 row-cols-md-2 g-4" markdown="0">
{% for pic in site.data.pictures_Leiden %}
	<div class="col">
		<figure class="gallery-card h-100 mb-0">
			<a href="{{ site.url }}{{ site.baseurl }}/images/picpic/Gallery/{{ pic.image }}" target="_blank" rel="noopener noreferrer" class="gallery-link" aria-label="Open full-size image: {{ pic.title }} (opens in new tab)">
				<img
					src="{{ site.url }}{{ site.baseurl }}/images/picpic/Gallery/{{ pic.image }}"
					alt="{{ pic.title }}"
					class="img-fluid gallery-image"
					loading="lazy"
				/>
			</a>
			<figcaption class="gallery-caption">{{ pic.title }}</figcaption>
		</figure>
	</div>
{% endfor %}
</div>

