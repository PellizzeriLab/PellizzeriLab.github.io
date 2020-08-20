---
title: "Pellizzeri Lab - Pictures"
layout: piclay
excerpt: "Pellizzeri Lab -- Pictures"
permalink: /pictures/
---

# Pictures

## Gallery
(Right-click *'view image'* to see a larger image.)

figure {
  float: right;
  width: 30%;
  text-align: center;
  font-style: italic;
  font-size: smaller;
  text-indent: 0;
  border: thin silver solid;
  margin: 0.5em;
  padding: 0.5em;
}

{% assign number_printed = 0 %}
{% for pic in site.data.pictures_Leiden %}

{% assign even_odd = number_printed | modulo: 4 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-3 clearfix">
<figure>
	<img src="{{ site.url }}{{ site.baseurl }}/images/picpic/Gallery/{{ pic.image }}" class="img-responsive" width="95%" style="float: left" alt="{{ pic.title }}" />
	<figcaption>{{ pic.image }}</figcaption>
</figure>


</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd > 2 %}
</div>
{% endif %}


{% endfor %}

{% assign even_odd = number_printed | modulo: 4 %}
{% if even_odd == 1 %}
</div>
{% endif %}

{% if even_odd == 2 %}
</div>
{% endif %}

{% if even_odd == 3 %}
</div>
{% endif %}

<p> &nbsp; </p>
