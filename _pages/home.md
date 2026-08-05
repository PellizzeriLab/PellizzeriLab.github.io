---
title: "Pellizzeri Lab - Home"
layout: homelay
excerpt: "Pellizzeri Lab at Eastern Illinois University."
sitemap: false
permalink: /
---

<div class="content-card" markdown="0">
  <p class="mb-2">We are a dynamic research group at Eastern Illinois University (<a href="https://www.eiu.edu/eiuchem/">EIU Chemistry</a>).</p>
  <p class="mb-0">Our aim is to use quantum mechanical modeling to explore and understand small-molecule catalysis, material properties, and adsorptive materials for water treatment (see <a href="{{ site.url }}{{ site.baseurl }}/research/">Research</a>).</p>
</div>

{% assign featured_pub = site.data.publist | where: "highlight", 1 | first %}
{% if featured_pub %}
<div class="featured-pub content-card" markdown="0">
  <p class="featured-kicker mb-2">Featured Publication</p>
  <h2 class="h5 mb-2">{{ featured_pub.title }}</h2>
  <p class="author-line mb-2">{{ featured_pub.authors | markdownify | remove: '<p>' | remove: '</p>' | strip }}</p>
  <p class="mb-2"><a href="{{ featured_pub.link.url }}"><strong>{{ featured_pub.link.display }}</strong></a></p>
  <a class="btn btn-sm btn-primary" href="{{ site.url }}{{ site.baseurl }}/publications">View all publications</a>
</div>
{% endif %}

<div class="row g-3 my-1" markdown="0">
  <div class="col-md-6 col-xl-3">
    <a class="quick-link-card" href="{{ site.url }}{{ site.baseurl }}/research">Research Focus</a>
  </div>
  <div class="col-md-6 col-xl-3">
    <a class="quick-link-card" href="{{ site.url }}{{ site.baseurl }}/publications">Recent Publications</a>
  </div>
  <div class="col-md-6 col-xl-3">
    <a class="quick-link-card" href="{{ site.url }}{{ site.baseurl }}/computing">Computing Resources</a>
  </div>
  <div class="col-md-6 col-xl-3">
    <a class="quick-link-card" href="{{ site.url }}{{ site.baseurl }}/openings">Join the Group</a>
  </div>
</div>

{% assign pi_count = site.data.team_members | size %}
{% assign masters_count = site.data.M_students | size %}
{% assign bachelors_count = site.data.B_students | size %}
{% assign current_member_total = pi_count | plus: masters_count | plus: bachelors_count %}

<div class="row g-3 my-2" markdown="0">
  <div class="col-6 col-lg-3">
    <div class="stats-card text-center" data-counter-target="{{ site.data.publist | size }}">
      <div class="stats-value">0</div>
      <div class="stats-label">Total Publications</div>
    </div>
  </div>
  <div class="col-6 col-lg-3">
    <div class="stats-card text-center" data-counter-target="{{ site.data.news | size }}">
      <div class="stats-value">0</div>
      <div class="stats-label">News Updates</div>
    </div>
  </div>
  <div class="col-6 col-lg-3">
    <div class="stats-card text-center" data-counter-target="{{ current_member_total }}">
      <div class="stats-value">0</div>
      <div class="stats-label">Current Members</div>
    </div>
  </div>
  <div class="col-6 col-lg-3">
    <div class="stats-card text-center" data-counter-target="{{ site.data.research_areas | size }}">
      <div class="stats-value">0</div>
      <div class="stats-label">Research Themes</div>
    </div>
  </div>
</div>

<div markdown="0" id="carousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000" data-bs-pause="hover">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>

  <div class="carousel-inner" markdown="0">
    <div class="carousel-item active">
      <img src="{{ site.url }}{{ site.baseurl }}/images/slider7001400/M_LOGO - Copy.png" class="d-block w-100" alt="Lab logo" style="height:400px;"/>
    </div>
    <div class="carousel-item">
      <img src="{{ site.url }}{{ site.baseurl }}/images/picpic/Gallery/New_Lab_Photo.jpg" class="d-block w-100" alt="Lab photo" style="height:400px;"/>
    </div>
    <div class="carousel-item">
      <img src="{{ site.url }}{{ site.baseurl }}/images/picpic/Gallery/Cluster_Image.jpg" class="d-block w-100" alt="Cluster image" style="height:400px;"/>
    </div>
    <div class="carousel-item">
      <img src="{{ site.url }}{{ site.baseurl }}/images/slider7001400/Elizabeth_Project.png" class="d-block w-100" alt="Project image" style="height:400px;"/>
    </div>
  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<figure class="img-responsive text-center">
  <img src="{{ site.url }}{{ site.baseurl }}/images/picpic/Gallery/Summer_EIU_Research_Conference.png" style="width: 400px;" alt="Pellizzeri Group Summer 2025">
  <figcaption class="text-muted mt-2">Pellizzeri Group - Summer 2025</figcaption>
</figure>


We are grateful for generous start-up funding from Eastern Illinois University, [EIU Chemistry](https://www.eiu.edu/eiuchem/), [ACS Peterolum Research Fund](https://www.acs.org/funding/grants/petroleum-research-fund.html) (PRF#65913-UNI6), and the [Bridges-2](https://www.psc.edu/resources/bridges-2/) at Pittsburgh Supercomputing Center through allocations CHE220084, CHE220091, CHE230015, CHE250097 from the Advanced Cyberinfrastructure Coordination Ecosystem: Services & Support ([ACCESS](https://access-ci.org/)) program, which is supported by National Science Foundation grants #2138259, #2138286, #2138307, #2137603, and #2138296.

<figure class="img-responsive text-center">
  <img src="{{ site.url }}{{ site.baseurl }}/images/logopic/Funding.png" style="width: 500px" alt="Funding sources">
</figure>
