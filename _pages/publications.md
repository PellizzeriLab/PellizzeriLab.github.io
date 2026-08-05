---
title: "Pellizzeri Lab - Publications"
layout: gridlay
excerpt: "Pellizzeri Lab -- Publications."
sitemap: false
permalink: /publications/
---

<div class="publications-page" markdown="0">
  <h1>Publications</h1>
  {% assign publications_sorted = site.data.publist | sort: "year" | reverse %}
  {% assign years = publications_sorted | map: "year" | uniq %}

  <h2>Highlights</h2>
  <p class="text-muted mb-4">For a full list see <a href="#full-list">below</a> or visit <a href="https://scholar.google.com/citations?hl=en&user=ELOkKaUAAAAJ&view_op=list_works&sortby=pubdate">Google Scholar</a>.</p>

  <div class="content-card mb-4" markdown="0">
    <label for="pubFilter" class="form-label fw-semibold">Search Publications</label>
    <div class="d-flex gap-2">
      <input id="pubFilter" class="form-control" type="text" placeholder="Search by keyword, author, year, or journal..." aria-label="Search publications" />
      <button id="pubFilterClear" class="btn btn-outline-secondary" type="button">Clear</button>
    </div>
  </div>

  <div class="publication-highlights" markdown="0">
    <div class="row g-4">
    {% for publi in site.data.publist %}
      {% if publi.highlight == 1 %}
        <div class="col-lg-6 mb-3">
          <div class="publication-card h-100 p-3 border rounded bg-white shadow-sm">
            <div class="mb-2"><span class="badge bg-info-subtle text-info-emphasis border">{{ publi.year }}</span></div>
            {% if publi.image %}
            <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ publi.image }}" class="img-fluid rounded publication-thumb" alt="{{ publi.title }}" />
            {% endif %}
            <h3 class="h6 pub-title mb-2">{{ publi.title }}</h3>
            {% if publi.description %}
            <p class="mb-2">{{ publi.description }}</p>
            {% endif %}
            <p class="mb-2 author-line">{{ publi.authors | markdownify | remove: '<p>' | remove: '</p>' | strip }}</p>
            <p class="mb-2"><strong><a href="{{ publi.link.url }}">{{ publi.link.display }}</a></strong></p>
            {% if publi.news1 %}
            <p class="text-danger mb-1"><strong>{{ publi.news1 }}</strong></p>
            {% endif %}
            {% if publi.news2 %}
            <p class="mb-0">{{ publi.news2 }}</p>
            {% endif %}
          </div>
        </div>
      {% endif %}
    {% endfor %}
    </div>
  </div>

  <div class="my-4"></div>

  <div class="year-chip-wrap mb-3" aria-label="Jump to publication year">
    {% for y in years %}
    <a class="year-chip" href="#year-{{ y }}">{{ y }}</a>
    {% endfor %}
  </div>

  <h2 id="full-list">Full List (* undergraduate student)</h2>

  <div markdown="0">
    {% for y in years %}
    <section class="pub-year-group">
      <h3 id="year-{{ y }}">{{ y }}</h3>
      {% for publi in publications_sorted %}
        {% if publi.year == y %}
        <div class="pub-entry mb-3 pb-2 border-bottom">
          <div class="fw-semibold">{{ publi.title }}</div>
          <div class="author-line">{{ publi.authors | markdownify | remove: '<p>' | remove: '</p>' | strip }}</div>
          <div><a href="{{ publi.link.url }}">{{ publi.link.display }}</a></div>
        </div>
        {% endif %}
      {% endfor %}
    </section>
    {% endfor %}
  </div>
</div>
