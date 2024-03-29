---
title: "Pellizzeri Lab - Publications"
layout: gridlay
excerpt: "Pellizzeri Lab -- Publications."
sitemap: false
permalink: /publications/
---


# Publications

## Highlights

(For a full list see [below](#full-list) or go to [Google Scholar](https://scholar.google.com/citations?hl=en&user=ELOkKaUAAAAJ&view_op=list_works&sortby=pubdate#)

{% assign number_printed = 0 %}
{% for publi in site.data.publist %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if publi.highlight == 1 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
 <div class="well">
  <pubtit>{{ publi.title }}</pubtit>
  <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ publi.image }}" class="img-responsive" width="40%" style="float: left" />
  <p>{{ publi.description }}</p>
  <p><em>{{ publi.authors }}</em></p>
  <p><strong><a href="{{ publi.link.url }}">{{ publi.link.display }}</a></strong></p>
  <p class="text-danger"><strong> {{ publi.news1 }}</strong></p>
  <p> {{ publi.news2 }}</p>
 </div>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

<p> &nbsp; </p>


## Full List (* undergraduate student)

### 2023
{% for publi in site.data.publist %}

{% if publi.year == 2023 %}
{{ publi.title }} <br />
  <em>{{ publi.authors }} </em><br /><a href="{{ publi.link.url }}">{{ publi.link.display }}</a>
{% endif %}

{% endfor %}

### 2020
{% for publi in site.data.publist %}

{% if publi.year == 2020 %}
{{ publi.title }} <br />
  <em>{{ publi.authors }} </em><br /><a href="{{ publi.link.url }}">{{ publi.link.display }}</a>
{% endif %}

{% endfor %}

### 2019
{% for publi in site.data.publist %}

{% if publi.year == 2019 %}
{{ publi.title }} <br />
  <em>{{ publi.authors }} </em><br /><a href="{{ publi.link.url }}">{{ publi.link.display }}</a>
{% endif %}

{% endfor %}

### 2018
{% for publi in site.data.publist %}

{% if publi.year == 2018 %}
{{ publi.title }} <br />
  <em>{{ publi.authors }} </em><br /><a href="{{ publi.link.url }}">{{ publi.link.display }}</a>
{% endif %}

{% endfor %}

### 2017
{% for publi in site.data.publist %}

{% if publi.year == 2017 %}
{{ publi.title }} <br />
  <em>{{ publi.authors }} </em><br /><a href="{{ publi.link.url }}">{{ publi.link.display }}</a>
{% endif %}

{% endfor %}

### 2016
{% for publi in site.data.publist %}

{% if publi.year == 2016 %}
{{ publi.title }} <br />
  <em>{{ publi.authors }} </em><br /><a href="{{ publi.link.url }}">{{ publi.link.display }}</a>
{% endif %}

{% endfor %}

### 2014
{% for publi in site.data.publist %}

{% if publi.year == 2014 %}
{{ publi.title }} <br />
  <em>{{ publi.authors }} </em><br /><a href="{{ publi.link.url }}">{{ publi.link.display }}</a>
{% endif %}

{% endfor %}

### 2013
{% for publi in site.data.publist %}

{% if publi.year == 2013 %}
{{ publi.title }} <br />
  <em>{{ publi.authors }} </em><br /><a href="{{ publi.link.url }}">{{ publi.link.display }}</a>
{% endif %}

{% endfor %}

### 2012
{% for publi in site.data.publist %}

{% if publi.year == 2012 %}
{{ publi.title }} <br />
  <em>{{ publi.authors }} </em><br /><a href="{{ publi.link.url }}">{{ publi.link.display }}</a>
{% endif %}

{% endfor %}

### 2011
{% for publi in site.data.publist %}

{% if publi.year == 2011 %}
{{ publi.title }} <br />
  <em>{{ publi.authors }} </em><br /><a href="{{ publi.link.url }}">{{ publi.link.display }}</a>
{% endif %}

{% endfor %}

### 2010
{% for publi in site.data.publist %}

{% if publi.year == 2010 %}
{{ publi.title }} <br />
  <em>{{ publi.authors }} </em><br /><a href="{{ publi.link.url }}">{{ publi.link.display }}</a>
{% endif %}

{% endfor %}

### 2009
{% for publi in site.data.publist %}

{% if publi.year == 2009 %}
{{ publi.title }} <br />
  <em>{{ publi.authors }} </em><br /><a href="{{ publi.link.url }}">{{ publi.link.display }}</a>
{% endif %}

{% endfor %}
